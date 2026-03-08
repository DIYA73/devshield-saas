#!/usr/bin/env node

import fs from "fs";

console.log("🛡 DevShield CLI running...");

fs.writeFileSync(
  "devshield.config.js",
`export default {
  apiKey: "YOUR_API_KEY"
}`
);

console.log("✅ DevShield initialized");