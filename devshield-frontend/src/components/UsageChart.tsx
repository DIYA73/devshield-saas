import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

interface UsageData {
  _id: string;
  count: number;
}

interface UsageChartProps {
  data: UsageData[];
}

export default function UsageChart({ data }: UsageChartProps) {

  return (
    <div className="bg-white p-6 rounded shadow mt-6">

      <h2 className="text-xl font-bold mb-4">
        API Usage
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="_id"/>
          <YAxis/>
          <Tooltip/>
          <Bar dataKey="count" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}