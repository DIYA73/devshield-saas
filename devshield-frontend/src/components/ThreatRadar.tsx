export default function ThreatRadar() {
  return (
    <div
      style={{
        background: "#111",
        padding: 20,
        marginTop: 20,
        borderRadius: 8,
        textAlign: "center"
      }}
    >
      <h3 style={{ color: "white", marginBottom: 20 }}>
        🛰 Threat Radar
      </h3>

      <div
        style={{
          width: 200,
          height: 200,
          margin: "0 auto",
          borderRadius: "50%",
          border: "2px solid #00ff9f",
          position: "relative",
          animation: "spin 4s linear infinite"
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "50%",
            height: "2px",
            background: "#00ff9f",
            top: "50%",
            left: "50%",
            transformOrigin: "left center"
          }}
        />
      </div>

      <style>
        {`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        `}
      </style>
    </div>
  );
}