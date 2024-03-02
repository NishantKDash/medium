import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "@lo_ewolf/medium-common";

const blogRouter = new Hono<{
  Bindings: {
    JWT_SECRET: string;
    DATABASE_URL: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const authHeader = c.req.header("Authorization") || "";

  const token = authHeader?.split(" ")[1];
  const payload = await verify(token, c.env.JWT_SECRET);
  if (payload) {
    c.set("userId", payload.id);
    await next();
  } else return c.json({ error: "Unauthorized access" });
});

blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const blogs = await prisma.blog.findMany();
    return c.json({ blogs: blogs });
  } catch (e) {
    console.log(e);
    return c.json("Internal Server Error");
  }
});
blogRouter.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const id = c.req.param("id");

  try {
    const blog = await prisma.blog.findUnique({
      where: {
        id: id,
      },
    });
    if (blog) {
      return c.json({ blog: blog });
    } else return c.json({ error: `Unable to find the blog with id : ${id}` });
  } catch (e) {
    console.log(e);
    return c.json({ error: "Internal server error" });
  }
});

blogRouter.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const userId = c.get("userId");

    const blogBody = await c.req.json();
    const { success } = createBlogInput.safeParse(blogBody);
    if (!success) return c.json({ error: "Invalid Inputs" });
    const newBlog = prisma.blog.create({
      data: {
        title: blogBody.title,
        content: blogBody.content,
        userId: userId,
      },
    });
    return c.json({ message: `Blog created with id : ${(await newBlog).id}` });
  } catch (e) {
    console.log(e);
    c.json({ error: "Internal Server Error" });
  }
});

blogRouter.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const body = await c.req.json();
    const { success } = updateBlogInput.safeParse(body);
    if (!success) return c.json({ error: "Invalid Inputs" });
    const blog = await prisma.blog.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return c.json({ message: "Blog updated" });
  } catch (e) {
    console.log(e);
    return c.json("Internal Server Error");
  }
});

// blogRouter.get("/bulk", async (c) => {
//   const prisma = new PrismaClient({
//     datasourceUrl: c.env.DATABASE_URL,
//   }).$extends(withAccelerate());
//   try {
//     const blogs = await prisma.blog.findMany();
//     return c.json({ blogs: blogs });
//   } catch (e) {
//     console.log(e);
//     return c.json("Internal Server Error");
//   }
// });

//moving before :id as control first reaches this first as :id is getting bulk
export { blogRouter };
