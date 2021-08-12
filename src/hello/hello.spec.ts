import request from "supertest";
import server from "../server";

describe("HelloController", () => {
  test("Hello World", (done) => {
    request(server)
      .get("/api/v1/hello")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
