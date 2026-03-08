type Log = {
  time: string
  ip: string
  country: string
  type: string
}

const logs: Log[] = [
  { time: "07:41", ip: "91.24.x.x", country: "Iran", type: "SQL Injection" },
  { time: "07:42", ip: "31.12.x.x", country: "China", type: "Bot Attack" },
  { time: "07:43", ip: "72.21.x.x", country: "Russia", type: "Brute Force" },
  { time: "07:44", ip: "81.11.x.x", country: "USA", type: "DDoS Probe" }
]

export default function AttackLogs() {

  return (

    <div className="card">

      <h3 className="section-title">
        📜 Attack Logs
      </h3>

      <table className="log-table">

        <thead>
          <tr>
            <th>Time</th>
            <th>IP</th>
            <th>Country</th>
            <th>Attack</th>
          </tr>
        </thead>

        <tbody>

          {logs.map((log, i) => (

            <tr key={i}>
              <td>{log.time}</td>
              <td>{log.ip}</td>
              <td>{log.country}</td>
              <td>{log.type}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )
}