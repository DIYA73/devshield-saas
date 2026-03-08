import Globe from "react-globe.gl";
import { useEffect, useState } from "react";

export default function CyberGlobe() {
type Attack = {
  startLat: number
  startLng: number
  endLat: number
  endLng: number
  color: string
}

const [attacks, setAttacks] = useState<Attack[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newAttack = {
        startLat: Math.random() * 140 - 70,
        startLng: Math.random() * 360 - 180,
        endLat: Math.random() * 140 - 70,
        endLng: Math.random() * 360 - 180,
        color: ["red", "orange", "yellow"][
          Math.floor(Math.random() * 3)
        ]
      };

      setAttacks((prev) => [...prev.slice(-20), newAttack]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card">
      <h3 className="section-title">🌍 Global Cyber Attacks</h3>

      <Globe
        height={500}
        arcsData={attacks}
        arcColor={"color"}
        arcDashLength={0.5}
        arcDashGap={2}
        arcDashAnimateTime={1500}
        arcStroke={0.7}
        backgroundColor="#020617"
      />
    </div>
  );
}