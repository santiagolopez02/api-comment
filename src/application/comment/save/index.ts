import { Comment } from "@/domain/entities";
import { CommentRepository } from "@/domain/interfaces/repositories";

class CommentSaveUseCase {
  readonly commentRepository: CommentRepository;

  constructor(commentRepository: CommentRepository) {
    this.commentRepository = commentRepository;
  }

  async save(comment: string, id_img: number) {
    try {
      const commentObject: Comment = new Comment(comment, id_img);
      const res = await this.commentRepository.save(commentObject);

      console.log(res);

      return res;
    } catch (error) {
      console.log("error save use-case: ", error);
      throw new Error();
    }
  }
}

export default CommentSaveUseCase;