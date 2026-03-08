import { Router } from "express";
import ApiKey from "../models/ApiKey";
import { protectUser } from "../middleware/authMiddleware";
import { generateApiKey } from "../middleware/apiKeyAuth";

const router = Router();

// Get all keys for logged user
router.get("/", protectUser, async (req: any, res) => {
  try {
    const keys = await ApiKey.find({ user: req.user.id });
    res.json(keys.map((k) => k.key));
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

// Generate new key
router.post("/generate", protectUser, async (req: any, res) => {
  try {
    const key = await generateApiKey(req.user.id);
    res.json({ apiKey: key });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;