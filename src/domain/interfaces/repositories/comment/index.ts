import { Comment } from "@/domain/entities";

//Interface CommentRepository
export default interface CommentRepository {
  save: (comment: string, id_img: string) => Promise<Comment>;
  getAllByIdImg: (id_img: string) => Promise<Comment[]>;
  deleteById: (id: number) => Promise<void>;
}
