import z from "zod";

// Signup input
export const signupInput = z.object({
  name: z.string(),
  password: z.string().min(6),
  email: z.string().email(),
});

export type SignupInput = z.infer<typeof signupInput>;

// Signin input
export const signinInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type SigninInput = z.infer<typeof signinInput>;

// Create Blog input
export const createBlogInput = z.object({
  title: z.string().min(5).max(50),
  content: z.string().min(6).max(50),
});

export type CreateBlogInput = z.infer<typeof createBlogInput>;

// Update Blog input
export const updateBlogInput = z.object({
  title: z.string().min(5).max(50),
  content: z.string().min(6).max(50),
  id: z.string(),
});

export type UpdateBlogInput = z.infer<typeof updateBlogInput>;
