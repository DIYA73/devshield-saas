import mongoose from "mongoose";

interface IUsage {
  apiKey: string;
  endpoint: string;
  method: string;
  responseTime: number;
  createdAt?: Date;
}

const usageSchema = new mongoose.Schema<IUsage>({
  apiKey: String,
  endpoint: String,
  method: String,
  responseTime: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Usage = mongoose.model<IUsage>("Usage", usageSchema);

export default Usage;