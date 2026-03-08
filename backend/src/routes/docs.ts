import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    endpoints: [
      { method: "POST", url: "/track", auth: "API Key" },
      { method: "GET", url: "/logs", auth: "API Key" },
      { method: "GET", url: "/stats", auth: "API Key" }
    ]
  });
});

export default router;