import { Router } from "express";
import Usage from "../models/Usage";
import { protectUser } from "../middleware/authMiddleware";

const router = Router();

router.get("/:apiKey", protectUser, async (req, res) => {
  try {
    const { apiKey } = req.params;

    const logs = await Usage.find({ apiKey })
      .sort({ createdAt: -1 })
      .limit(50);

    res.json(logs);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;