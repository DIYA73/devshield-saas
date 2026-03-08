type Threat = {
  name: string
  level: "low" | "medium" | "high"
}

const threats: Threat[] = [
  { name: "SQL Injection", level: "high" },
  { name: "Brute Force Login", level: "medium" },
  { name: "Bot Traffic", level: "medium" },
  { name: "Port Scan", level: "low" }
]

export default function AIThreatPanel() {

  const getColor = (level: Threat["level"]) => {
    if (level === "high") return "#ff3b3b"
    if (level === "medium") return "#ff9f43"
    return "#feca57"
  }

  return (

    <div className="card">

      <h3 className="section-title">🤖 AI Threat Detection</h3>

      <ul>

        {threats.map((t, i) => (

          <li key={i} style={{ color: getColor(t.level) }}>
            {t.name} — {t.level.toUpperCase()}
          </li>

        ))}

      </ul>

    </div>

  )
}