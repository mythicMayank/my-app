import express from "express";

export function createApp() {
  const app = express();

  app.use(express.json());

  app.get("/health", (_req, res) => {
    res.status(200).json({ status: "ok" });
  });

  app.get("/hello", (req, res) => {
    const name = String(req.query.name || "world");
    res.json({ message: `Hello, ${name}!` });
  });

  return app;
}

export default createApp;
