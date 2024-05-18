import { Comment } from "@/domain/entities";
import { CommentRepository } from "@/domain/interfaces/repositories";
import prisma from "@/infrastructure/connectors/prisma/client";
export default class CommentPostgreSQLRepository implements CommentRepository {
  async save(comment: Comment): Promise<Comment> {
    try {
      return await prisma.comment.create({ data: comment });
    } catch (error) {
      throw new Error();
    }
  }
}
