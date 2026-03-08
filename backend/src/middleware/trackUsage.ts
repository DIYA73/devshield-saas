import { Request, Response, NextFunction } from "express";
import Usage from "../models/Usage";
import { io } from "../server";

export const trackUsage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const startTime = Date.now();

  res.on("finish", async () => {

    try {

      const apiKey = req.headers["x-api-key"] as string;

      if (!apiKey) return;

      const usage = await Usage.create({
        apiKey,
        endpoint: req.originalUrl,
        method: req.method,
        responseTime: Date.now() - startTime
      });

      io.emit("new-request", {
        endpoint: usage.endpoint,
        method: usage.method,
        time: new Date()
      });

      // 🚨 Attack detection
      const suspiciousLimit = 100;

      const recentRequests = await Usage.countDocuments({
        apiKey,
        createdAt: { $gte: new Date(Date.now() - 10000) }
      });

      if (recentRequests > suspiciousLimit) {

        io.emit("attack-detected", {
          apiKey,
          requests: recentRequests
        });

      }

    } catch (err) {
      console.log("Usage tracking failed");
    }

  });

  next();

};