import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";
const app = new Hono<{
  Bindings: {
    JWT_SECRET: string;
    DATABASE_URL: string;
  };
}>();

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);
app.get("/api/v1/auth/blog/:id", (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const id = c.req.param("id");
  console.log(id);
  return c.text("get blog route");
});

app.post("/api/v1/auth/blog", (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  return c.text("signin route");
});

app.put("/api/v1/auth/blog", (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  return c.text("signin route");
});

export default app;
