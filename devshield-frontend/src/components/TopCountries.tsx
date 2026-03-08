export default function TopCountries() {
  const countries = [
    { name: "Iran", attacks: 320 },
    { name: "Russia", attacks: 280 },
    { name: "China", attacks: 240 },
    { name: "North Korea", attacks: 150 },
    { name: "USA", attacks: 120 },
    { name: "Israel", attacks: 90 },
    { name: "Iraq", attacks: 60 }
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
      <h3 style={{ color: "white", marginBottom: 10 }}>
        🌍 Top Attacking Countries
      </h3>

      {countries.map((c, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "6px 0",
            color: "#ccc"
          }}
        >
          <span>{c.name}</span>
          <span style={{ color: "#ff4444" }}>{c.attacks}</span>
        </div>
      ))}
    </div>
  );
}