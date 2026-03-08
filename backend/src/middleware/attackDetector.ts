import { Request, Response, NextFunction } from "express";

export default function detectAttack(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const suspicious =
    req.url.includes("admin") ||
    req.url.includes("wp-login") ||
    req.url.includes("phpmyadmin");

  if (suspicious) {
    console.log("⚠️ Possible attack detected:", req.ip, req.url);
  }

  next();
}