import { Comment } from "@/domain/entities";
import { CommentRepository } from "@/domain/interfaces/repositories";
import prisma from "@/infrastructure/connectors/prisma/client";
export default class CommentPostgreSQLRepository implements CommentRepository {
  //Service to save comment in database
  async save(comment: Comment): Promise<Comment> {
    try {
      const {
        comment: commentRes,
        id_img,
        active,
        created_at,
        id,
      } = await prisma.comment.create({ data: comment });

      const commentResponse = new Comment(
        commentRes,
        id_img,
        active,
        new Date(created_at),
        id
      );

      return commentResponse;
    } catch (error) {
      throw new Error();
    }
  }

  //Service to get all comments by image id
  async getAllByIdImg(id_img: number): Promise<Comment[]> {
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
}
