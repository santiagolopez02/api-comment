import { CommentSaveUseCase } from "@/application/comment";
import { CommentRepository } from "@/domain/interfaces/repositories";
import CommentPostgreSQLRepository from "@/infrastructure/repositories/comment/postgresql";
import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    res.status(200).send({ status: "OK" });
  } catch (err) {
    res.status(500).json({
      status: "ERROR",
      message:
        err instanceof Error ? err.message : "Unexpected authentication error",
    });
  }
});

router.post("/save", async (req: Request, res: Response) => {
  try {
    const comment: string = req?.body?.comment;
    const id_img: number = req?.body?.id_img;
    const active: boolean = req?.body?.active;

    const commentRepository: CommentRepository =
      new CommentPostgreSQLRepository();
    const commentUseCase: CommentSaveUseCase = new CommentSaveUseCase(
      commentRepository
    );

    const response = await commentUseCase.save(comment, id_img, active);

    console.log("CommentUseCase response: ", response);
    res.status(200).send({ status: "OK" });
  } catch (err) {
    res.status(500).json({
      status: "ERROR",
      message:
        err instanceof Error ? err.message : "Unexpected authentication error",
    });
  }
});

export default router;
