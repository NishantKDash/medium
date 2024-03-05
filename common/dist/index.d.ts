import z from "zod";
export declare const signupInput: z.ZodObject<{
    name: z.ZodString;
    password: z.ZodString;
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    password: string;
    email: string;
}, {
    name: string;
    password: string;
    email: string;
}>;
export type SignupInput = z.infer<typeof signupInput>;
export declare const signinInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    password: string;
    email: string;
}, {
    password: string;
    email: string;
}>;
export type SigninInput = z.infer<typeof signinInput>;
export declare const createBlogInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    category: z.ZodString;
    publishedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    category: string;
    publishedAt: string;
}, {
    title: string;
    content: string;
    category: string;
    publishedAt: string;
}>;
export type CreateBlogInput = z.infer<typeof createBlogInput>;
export declare const updateBlogInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    id: string;
}, {
    title: string;
    content: string;
    id: string;
}>;
export type UpdateBlogInput = z.infer<typeof updateBlogInput>;
