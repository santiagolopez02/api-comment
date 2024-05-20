import { Comment } from "@/domain/entities";
import { CommentRepository } from "@/domain/interfaces/repositories";

// Use-case to save a comment
class CommentSaveUseCase {
  readonly commentRepository: CommentRepository;

  constructor(commentRepository: CommentRepository) {
    this.commentRepository = commentRepository;
  }

  async save(comment: string, id_img: string) {
    try {
      const res: Comment = await this.commentRepository.save(comment, id_img);

      return res;
    } catch (error) {
      console.log("error save use-case: ", error);
      throw new Error();
    }
  }
}

export default CommentSaveUseCase;
