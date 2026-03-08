import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

interface ChartDataPoint {
  _id: string;
  count: number;
}

interface RequestsChartProps {
  data: ChartDataPoint[];
}

export default function RequestsChart({ data }: RequestsChartProps) {

  return (

    <ResponsiveContainer width="100%" height={300}>

      <LineChart data={data}>

        <XAxis dataKey="_id" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="count"
          stroke="#6366f1"
        />

      </LineChart>

    </ResponsiveContainer>

  );

}