import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3002", {
  transports: ["websocket"],
});

type RequestLog = {
  endpoint: string;
  method: string;
  time: string | Date;
};

export default function LiveRequests() {
  const [requests, setRequests] = useState<RequestLog[]>([]);

  useEffect(() => {
    socket.on("new-request", (data: RequestLog) => {
      setRequests((prev) => [data, ...prev.slice(0, 10)]);
    });

    return () => {
      socket.off("new-request");
    };
  }, []);

  return (
    <div style={{ background: "#111", padding: 20 }}>
      <h3 style={{ color: "#fff" }}>Live Requests</h3>

      {requests.map((r, i) => (
        <div key={i} style={{ color: "#00ffcc" }}>
          {r.method} {r.endpoint}
        </div>
      ))}
    </div>
  );
}