import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

const socket = io("http://localhost:3001");

export default function LiveRequestsChart() {

  const [data, setData] = useState<{ time: string; value: number }[]>([]);

  useEffect(() => {

    socket.on("new-request", () => {

      const now = new Date().toLocaleTimeString();

      setData(prev => [
        ...prev.slice(-20),
        { time: now, value: Math.floor(Math.random() * 10) + 1 }
      ]);

    });

  }, []);

  return (

    <LineChart width={600} height={300} data={data}>
      <CartesianGrid stroke="#444" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#ff3b3b" />
    </LineChart>

  );
}