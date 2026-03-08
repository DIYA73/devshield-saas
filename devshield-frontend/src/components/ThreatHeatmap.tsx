export default function ThreatHeatmap() {
  const data = [
    { region: "Middle East", level: 90 },
    { region: "Asia", level: 70 },
    { region: "Europe", level: 50 },
    { region: "North America", level: 30 },
    { region: "Africa", level: 20 }
  ];

  return (
    <div
      style={{
        background: "#111",
        padding: 20,
        marginTop: 20,
        borderRadius: 8
      }}
    >
      <h3 style={{ color: "white", marginBottom: 15 }}>
        🔥 Threat Heatmap
      </h3>

      {data.map((d, i) => (
        <div key={i} style={{ marginBottom: 10 }}>
          <div style={{ color: "#ccc", marginBottom: 4 }}>
            {d.region}
          </div>

          <div
            style={{
              height: 8,
              background: "#222",
              borderRadius: 4
            }}
          >
            <div
              style={{
                width: `${d.level}%`,
                height: 8,
                background: "#ff3b3b",
                borderRadius: 4
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}