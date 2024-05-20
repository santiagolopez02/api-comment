import { Comment } from "@/domain/entities";
import { CommentRepository } from "@/domain/interfaces/repositories";
import prisma from "@/infrastructure/connectors/prisma/client";
export default class CommentPostgreSQLRepository implements CommentRepository {
  //Service to save comment in database
  async save(comment: string, id_img: string): Promise<Comment> {
    try {
      const {
        comment: commentRes,
        id_img: idImg,
        active,
        created_at,
        id,
      } = await prisma.comment.create({
        data: {
          comment,
          id_img,
        },
      });

      const commentResponse = new Comment(
        commentRes,
        idImg,
        active,
        new Date(created_at),
        id
      );

      return commentResponse;
    } catch (error) {
      console.error(error);
      throw new Error();
    }
  }

  //Service to get all comments by image id
  async getAllByIdImg(id_img: string): Promise<Comment[]> {
    try {
      const res = await prisma.comment.findMany({
        where: {
          id_img,
        },
      });

      const comments: Comment[] = res.map(
        ({ comment, id_img, active, created_at, id }) =>
          new Comment(comment, id_img, active, new Date(created_at), id)
      );

      return comments;
    } catch (error) {
      throw new Error();
    }
  }
  async deleteById(id: number): Promise<void> {
    try {
      await prisma.comment.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new Error();
    }
  }
}
