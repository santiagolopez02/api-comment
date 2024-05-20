//Class Comment
export default class Comment {
  public id?: number;
  public comment: string;
  public id_img: string;
  public active?: boolean;
  public created_at?: Date;

  constructor(
    comment: string,
    id_img: string,
    active?: boolean,
    created_at?: Date,
    id?: number
  ) {
    this.id = id;
    this.comment = comment;
    this.id_img = id_img;
    this.active = active;
    this.created_at = created_at;
  }
}
