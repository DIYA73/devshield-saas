import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

export default function WorldMap() {
  const attacks = [
    { coordinates: [35, 32] },
    { coordinates: [51, 35] },
    { coordinates: [116, 40] },
    { coordinates: [-74, 40] }
  ];

  return (
    <div className="card">
      <h3 className="section-title">🌍 Attack Map</h3>

      <ComposableMap projectionConfig={{ scale: 150 }}>
        <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
            {({ geographies }: { geographies: unknown[] }) =>
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          geographies.map((geo: any) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#0f172a"
                stroke="#1e293b"
              />
            ))
          }
        </Geographies>

        {attacks.map((attack, i) => (
          <Marker key={i} coordinates={attack.coordinates}>
            <circle r={4} fill="#ff4444" />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}