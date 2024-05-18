import { CommentSaveUseCase } from "@/application/comment";
import { CommentRepository } from "@/domain/interfaces/repositories";
import { CommentPostgreSQLRepository } from "@/infrastructure/repositories";

import express, { Request, Response } from "express";

const router = express.Router();

router.get("/comment", async (req: Request, res: Response) => {
  try {
    console.log("entra aca");
    return res.status(200).send({ status: "OK aca le esta pegando" });
  } catch (err) {
    res.status(500).json({
      status: "ERROR",
      message: err instanceof Error ? err.message : "Unexpected error",
    });
  }
});

router.post("/comment/save", async (req: Request, res: Response) => {
  try {
    console.log("entra aca");
    const comment: string = req?.body?.comment;
    const id_img: number = req?.body?.id_img;
    console.log("entra aca", comment, id_img);
    const commentRepository: CommentRepository =
      new CommentPostgreSQLRepository();
    const commentUseCase: CommentSaveUseCase = new CommentSaveUseCase(
      commentRepository
    );

    const response = await commentUseCase.save(comment, id_img);

    console.log("CommentUseCase response: ", response);

    res.status(200).send({ status: "OK" });
  } catch (err) {
    res.status(500).json({
      status: "ERROR",
      message: err instanceof Error ? err.message : "Unexpected error",
    });
  }
});

export default router;
