import { Comment } from "@/domain/entities";
import { CommentRepository } from "@/domain/interfaces/repositories";
// Use-case to get all comment by id_img
class CommentDeleteByIdImgUseCase {
  readonly commentRepository: CommentRepository;

  constructor(commentRepository: CommentRepository) {
    this.commentRepository = commentRepository;
  }

  async deleteById(id: number) {
    try {
      const res: void = await this.commentRepository.deleteById(id);
      return res;
    } catch (error) {
      throw new Error();
    }
  }
}

export default CommentDeleteByIdImgUseCase;
