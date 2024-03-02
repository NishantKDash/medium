import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";
import { signupInput, signinInput } from "@lo_ewolf/medium-common";

const userRouter = new Hono<{
  Bindings: {
    JWT_SECRET: string;
    DATABASE_URL: string;
  };
}>();
userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  interface User {
    name: string;
    password: string;
    email: string;
  }

  const body: User = await c.req.json();
  const { success } = signupInput.safeParse(body);
  if (!success) return c.json({ error: "Invalid Inputs" });
  try {
    const newUser = await prisma.user.create({
      data: {
        name: body.name,
        password: body.password,
        email: body.email,
      },
    });
    const payload = {
      id: newUser.Id,
      email: newUser.email,
      name: newUser.name,
    };
    const token = await sign(payload, c.env.JWT_SECRET);
    return c.json({
      message: `User created with email : ${newUser.email}`,
      token: token,
    });
  } catch (e) {
    console.log(e);
    c.status(403);
    return c.json({ error: "Error creating User" });
  }
});

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  interface User {
    email: string;
    password: string;
  }
  const body: User = await c.req.json();
  const { success } = signinInput.safeParse(body);
  if (!success) return c.json({ error: "Invalid Inputs" });
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });
    if (user) {
      if (body.password === user.password) {
        const payload = {
          id: user.Id,
          email: user.email,
          name: user.name,
        };
        const token = await sign(payload, c.env.JWT_SECRET);
        return c.json({ token: token });
      } else return c.json({ error: "Email or password wrong" });
    } else
      return c.json({ error: `User with email : ${body.email} not found` });
  } catch (e) {
    console.log(e);
    return c.json({ error: "Internal Server Error" });
  }
});
export { userRouter };
