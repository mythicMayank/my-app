"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("../src/app");
describe("app routes", () => {
    const app = (0, app_1.createApp)();
    test("GET /health returns ok", async () => {
        const res = await (0, supertest_1.default)(app).get("/health");
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ status: "ok" });
    });
    test("GET /hello returns greeting", async () => {
        const res = await (0, supertest_1.default)(app).get("/hello").query({ name: "Alice" });
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ message: "Hello, Alice!" });
    });
});
