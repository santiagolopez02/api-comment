import { Comment } from "@/domain/entities";
import { CommentRepository } from "@/domain/interfaces/repositories";
// Use-case to get all comment by id_img
class CommentGelAllByIdImgUseCase {
  readonly commentRepository: CommentRepository;

  constructor(commentRepository: CommentRepository) {
    this.commentRepository = commentRepository;
  }

  async getAllByIdImg(id_img: string) {
    try {
      const res: Comment[] = await this.commentRepository.getAllByIdImg(id_img);

      return res;
    } catch (error) {
      throw new Error();
    }
  }
}

export default CommentGelAllByIdImgUseCase;
