import request from "supertest";
import { createApp } from "../src/app";

describe("app routes", () => {
  const app = createApp();

  test("GET /health returns ok", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });

  test("GET /hello returns greeting", async () => {
    const res = await request(app).get("/hello").query({ name: "Alice" });
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "Hello, Alice!" });
  });
});
