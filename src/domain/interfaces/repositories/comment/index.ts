import { Comment } from "@/domain/entities";

export default interface CommentRepository {
  save: (comment: Comment) => Promise<Comment>;
}
