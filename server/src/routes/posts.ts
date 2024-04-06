import express from "express";
import * as postController from "../controllers/postController";
import { requiresAuth } from "../middleware/auth";

const router = express.Router();

router
    .post("/", requiresAuth, postController.createPost)
    .get("/user/:userId", postController.getUserPosts)
    .get("/:postId", postController.getPostById)
    .put("/:id", postController.updatePost)
    .delete("/:id", postController.deletePost);

export default router;
