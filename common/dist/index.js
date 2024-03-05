"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogInput = exports.createBlogInput = exports.signinInput = exports.signupInput = void 0;
const zod_1 = __importDefault(require("zod"));
// Signup input
exports.signupInput = zod_1.default.object({
    name: zod_1.default.string(),
    password: zod_1.default.string().min(6),
    email: zod_1.default.string().email(),
});
// Signin input
exports.signinInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
});
// Create Blog input
exports.createBlogInput = zod_1.default.object({
    title: zod_1.default.string().min(5).max(300),
    content: zod_1.default.string().min(6),
    category: zod_1.default.string().min(2).max(20),
    publishedAt: zod_1.default.string(),
});
// Update Blog input
exports.updateBlogInput = zod_1.default.object({
    title: zod_1.default.string().min(5).max(300),
    content: zod_1.default.string().min(6),
    id: zod_1.default.string(),
});
