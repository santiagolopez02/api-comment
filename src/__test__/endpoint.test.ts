import request from "supertest";
import app from "@/index";

describe("API Endpoints", () => {
  let id: number;
  it("POST /api/comment/save should return success", async () => {
    const response = await request(app)
      .post("/api/comment/save")
      .send({ id_img: "example_id", comment: "example_comment" });

    const res = JSON.parse(response.text);
    console.log("POST /api", res);
    id = parseInt(res.id);
    expect(response.status).toBe(200);
  });
  it("GET /api should return success", async () => {
    const response = await request(app)
      .get("/api/comment")
      .query({ id_img: "example_id" });

    expect(response.status).toBe(200);
  });
  it("DELETE /api should return success", async () => {
    console.log("DELETE /ID", id);
    const response = await request(app)
      .delete("/api/comment/delete")
      .send({ id });

    expect(response.status).toBe(200);
  });
});
