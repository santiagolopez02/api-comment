import {
  CommentSaveUseCase,
  CommentGetAllByIdImgUseCase,
  CommentDeleteByIdImgUseCase,
} from "@/application/comment";
import { CommentRepository } from "@/domain/interfaces/repositories";
import { CommentPostgreSQLRepository } from "@/infrastructure/repositories";

import express, { Request, Response } from "express";

const router = express.Router();

// Endpoint to handle GET requests for fetching comments by image ID
router.get("/comment", async (req: Request, res: Response) => {
  try {
    const id_img: string = req.query.id_img as string;
    if (!id_img)
      res.status(500).json({
        status: "ERROR",
        message: "Error missing parameter id_im",
      });
    // Creating an instance of CommentRepository using PostgreSQL implementation
    const commentRepository: CommentRepository =
      new CommentPostgreSQLRepository();
    const commentUseCase: CommentGetAllByIdImgUseCase =
      new CommentGetAllByIdImgUseCase(commentRepository);

    const response = await commentUseCase.getAllByIdImg(id_img);

    // Sending successful response with fetched comments
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({
      status: "ERROR",
      message: err instanceof Error ? err.message : "Unexpected error",
    });
  }
});

// Endpoint to handle POST requests for saving a new comment
router.post("/comment/save", async (req: Request, res: Response) => {
  try {
    const comment: string = req?.body?.comment;
    const id_img: string = req?.body?.id_img;
    if (!id_img || !comment)
      res.status(500).json({
        status: "ERROR",
        message: "Error missing parameters id_img and comment",
      });

    // Creating an instance of CommentRepository using PostgreSQL implementation
    const commentRepository: CommentRepository =
      new CommentPostgreSQLRepository();
    const commentUseCase: CommentSaveUseCase = new CommentSaveUseCase(
      commentRepository
    );

    const response = await commentUseCase.save(comment, id_img);
    // Sending successful response with saved comment data
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({
      status: "ERROR",
      message: err instanceof Error ? err.message : "Unexpected error",
    });
  }
});

// Endpoint to handle POST requests for delete a  comment
router.delete("/comment/delete", async (req: Request, res: Response) => {
  try {
    const id: number = req?.body?.id;

    if (!id)
      res.status(500).json({
        status: "ERROR",
        message: "Error missing parameters id ",
      });

    const commentRepository: CommentRepository =
      new CommentPostgreSQLRepository();
    const commentUseCase: CommentDeleteByIdImgUseCase =
      new CommentDeleteByIdImgUseCase(commentRepository);

    const response = await commentUseCase.deleteById(id);
    console.log("response", response);
    res.status(200).json({
      is_delete: true,
    });
  } catch (err) {
    res.status(500).json({
      status: "ERROR",
      message: err instanceof Error ? err.message : "Unexpected error",
    });
  }
});

export default router;
