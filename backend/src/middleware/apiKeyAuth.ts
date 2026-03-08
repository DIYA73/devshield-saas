import { Request, Response, NextFunction } from "express";
import crypto from "crypto";
import bcrypt from "bcrypt";

import ApiKey from "../models/ApiKey";
import Usage from "../models/Usage";
import User from "../models/User";

/*
Generate API key
*/
export const generateApiKey = async (userId: string) => {

  const rawKey = "devshield_" + crypto.randomBytes(16).toString("hex");

  const hashedKey = await bcrypt.hash(rawKey, 10);

 await ApiKey.create({
  key: hashedKey,
  userId: userId
});

  return rawKey;
};


/*
API Key Middleware
*/
export const apiKeyAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  try {

    const apiKey = req.headers["x-api-key"] as string | undefined;

if (!apiKey) {
  return res.status(403).json({ message: "No API key provided" });
}

    const keys = await ApiKey.find();

    let matchedKey: any = null;

    for (const key of keys) {

      const match = await bcrypt.compare(apiKey, key.key);

      if (match) {
        matchedKey = key;
        break;
      }

    }

    if (!matchedKey) {
      return res.status(403).json({ message: "Invalid API key" });
    }

    const user = await User.findById(matchedKey.userId);

    if (!user) {
      return res.status(403).json({ message: "User not found" });
    }

    const today = new Date();
    today.setHours(0,0,0,0);

    const usageCount = await Usage.countDocuments({
      apiKey,
      createdAt: { $gte: today }
    });

    if (usageCount > user.requestLimit) {

      return res.status(429).json({
        message: "API limit reached"
      });

    }

    next();

  } catch (error) {

    console.error(error);
    res.status(500).json({ message: "Server error" });

  }

};