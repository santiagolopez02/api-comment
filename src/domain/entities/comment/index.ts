export default class Comment {
  public comment: string;
  public id_img: number;
  public active: boolean;

  constructor(comment: string, id_img: number, active: boolean) {
    this.comment = comment;
    this.id_img = id_img;
    this.active = active;
  }
}
