import express from "express";
import commentRouter from "./comment";

const router = express.Router();

router.use("/comment", commentRouter);

export default router;
