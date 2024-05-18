import { Comment } from "@/domain/entities";

//Interface CommentRepository
export default interface CommentRepository {
  save: (comment: Comment) => Promise<Comment>;
  getAllByIdImg: (id_img: number) => Promise<Comment[]>;
}
