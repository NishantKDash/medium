import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";
import { cors } from "hono/cors";
const app = new Hono<{
  Bindings: {
    JWT_SECRET: string;
    DATABASE_URL: string;
    FRONTEND_ORIGIN: string;
  };
}>();

app.use(
  "/api/*",
  cors({
    origin:
      "https://medium-vercel-cxi8mftn1-nishants-projects-29269fb4.vercel.app",
    allowHeaders: [
      "Upgrade-Insecure-Requests",
      "content-type",
      "Authorization",
    ],
    allowMethods: ["POST", "GET", "OPTIONS", "PUT"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  })
);

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

export default app;
