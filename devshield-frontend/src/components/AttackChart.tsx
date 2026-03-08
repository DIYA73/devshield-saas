import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

const data = [
  { time: "1m", attacks: 5 },
  { time: "2m", attacks: 12 },
  { time: "3m", attacks: 8 },
  { time: "4m", attacks: 15 },
  { time: "5m", attacks: 7 },
  { time: "6m", attacks: 18 }
];

export default function AttackChart() {
  return (
    <div
      style={{
        background: "#0b1c34",
        padding: 20,
        marginTop: 20,
        borderRadius: 12
      }}
    >
      <h3 style={{ color: "white", marginBottom: 20 }}>
        📈 Attack Traffic
      </h3>

      {/* 👇 PUT THE CODE HERE */}

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>

          <CartesianGrid vertical={false} stroke="#1f2937" strokeDasharray="3 3" />

          <XAxis
            dataKey="time"
            axisLine={false}
            tickLine={false}
            stroke="#9ca3af"
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            stroke="#9ca3af"
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="attacks"
            stroke="#ff3b3b"
            strokeWidth={3}
            dot={{ r:4 }}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}