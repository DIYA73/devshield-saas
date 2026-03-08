import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import http from "http";
import { Server } from "socket.io";

import * as Sentry from "@sentry/node";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

import geoip from "geoip-lite";

import connectDB from "./config/db";

import authRoutes from "./routes/auth.routes";
import dashboardRoutes from "./routes/dashboard";
import apiKeyRoutes from "./routes/apiKeys";
import docsRoutes from "./routes/docs";
import logsRoutes from "./routes/logs";
import billingRoutes from "./routes/billing";

import { apiKeyAuth } from "./middleware/apiKeyAuth";
import { trackUsage } from "./middleware/trackUsage";
import { apiLimiter } from "./middleware/rateLimit";
import { startAttackSimulation } from "./services/attackSimulator";
import detectAttack from "./middleware/attackDetector";

const app = express();
const PORT = process.env.PORT || 3003;

/*
SENTRY
*/
Sentry.init({
  dsn: process.env.SENTRY_DSN || "",
});

/*
DATABASE
*/
connectDB();

/*
MIDDLEWARE
*/
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());
app.use(helmet());
app.use(detectAttack);

/*
HTTP SERVER
*/
const server = http.createServer(app);

/*
SOCKET.IO
*/
export const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173","http://localhost:5174"],
    methods: ["GET", "POST"]
  }
});

/*
START ATTACK SIMULATION
*/
startAttackSimulation();

/*
SOCKET CONNECTION
*/
io.on("connection", (socket) => {

  console.log("🌍 Client connected to attack map");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });

});

/*
IP GEO DETECTION
*/
app.use((req, res, next) => {

  const rawIp =
    (req.headers["x-forwarded-for"] as string)?.split(",")[0] ||
    req.socket.remoteAddress ||
    "";

  const ip = rawIp.replace("::ffff:", "");

  const geo = geoip.lookup(ip);

  if (geo) {

    const attack = {
      from: [geo.ll[1], geo.ll[0]],
      to: [13.405, 52.52],
    };

    io.emit("attack-detected", attack);

  }

  next();

});

/*
RATE LIMIT
*/
app.use("/api", apiLimiter);

/*
ROUTES
*/
app.use("/api/auth", authRoutes);
app.use("/api/apikeys", apiKeyRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/docs",docsRoutes)
app.use("/api/logs", logsRoutes);
app.use("/api/billing", billingRoutes);

/*
SWAGGER
*/
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "DevShield API",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/*
PROTECTED ROUTE
*/
app.get("/api/protected", apiKeyAuth, trackUsage, (req, res) => {

  res.json({
    message: "Protected route working",
  });

});

/*
ROOT
*/
app.get("/", (req, res) => {
  res.send("🛡 DevShield API running...");
});

/*
START SERVER
*/
server.listen(PORT, () => {
  console.log(`🚀 DevShield running on port ${PORT}`);
});