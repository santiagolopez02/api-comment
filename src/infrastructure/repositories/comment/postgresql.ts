import { Comment } from "@/domain/entities";
import { CommentRepository } from "@/domain/interfaces/repositories";

export default class CommentPostgreSQLRepository implements CommentRepository {
  async save(comment: Comment): Promise<Comment> {
    throw new Error("Method not implemented.");
  }
}
