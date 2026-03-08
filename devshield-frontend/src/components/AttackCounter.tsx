import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3002");

export default function AttackCounter() {

  const [attacks, setAttacks] = useState<number>(0);

  useEffect(() => {

    socket.on("attack-count", (data: { total: number }) => {
      setAttacks(data.total);
    });

    return () => {
      socket.off("attack-count");
    };

  }, []);

  return (
    <div style={{ background: "#111", padding: 20, marginTop: 20 }}>
      <h3 style={{ color: "#fff" }}>Live Attack Counter</h3>
      <h1 style={{ color: "#ff4444" }}>{attacks}</h1>
    </div>
  );

}