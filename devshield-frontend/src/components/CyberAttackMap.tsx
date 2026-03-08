import { useEffect, useState } from "react";
import { socket } from "../services/socket";
import {
  ComposableMap,
  Geographies,
  Geography,
  Line,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

type Attack = {
  from: [number, number];
  to: [number, number];
};

export default function CyberAttackMap() {
  const [attacks, setAttacks] = useState<Attack[]>([]);

  useEffect(() => {
  socket.on("attack-detected", (attack: Attack) => {
    setAttacks((prev) => [...prev.slice(-25), attack]);
  });

  // TEST ATTACKS
  const interval = setInterval(() => {
    const randomAttack = {
      from: [
        Math.random() * 360 - 180,
        Math.random() * 180 - 90
      ],
      to: [
        Math.random() * 360 - 180,
        Math.random() * 180 - 90
      ]
    };

    setAttacks((prev) => [...prev.slice(-25), randomAttack]);
  }, 2000);

  return () => {
    socket.off("attack-detected");
    clearInterval(interval);
  };
}, []);

  return (
    <div className="card">
      <h3 className="section-title">🌍 Global Cyber Attacks</h3>

      <div className="map-container">
        <ComposableMap
          projection="geoEqualEarth"
          projectionConfig={{ scale: 150, center: [0, 20] }}
        >
          <Geographies geography={geoUrl}>
  {({ geographies }) =>
    geographies.map((geo) => (
      <Geography
        key={geo.rsmKey}
        geography={geo}
        fill="#0d1117"
        stroke="#6b7280"
        strokeWidth={0.6}
      />
    ))
  }
</Geographies>

          {/* Attack lines */}
          {attacks.map((a, i) => (
            <Line
              key={i}
              from={a.from}
              to={a.to}
              stroke="#ff2b2b"
              strokeWidth={2}
              strokeDasharray="6"
              strokeLinecap="round"
              style={{
                filter: "drop-shadow(0 0 8px red)"
              }}
            />
          ))}

          {/* Origin */}
          {attacks.map((a, i) => (
            <Marker key={i} coordinates={a.from}>
              <circle className="attack-origin" r={4} />
            </Marker>
          ))}

          {/* Target */}
          {attacks.map((a, i) => (
            <Marker key={i + "target"} coordinates={a.to}>
              <circle className="attack-target" r={5} />
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </div>
  );
}