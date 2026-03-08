import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function ApiUsageChart() {

  const [data, setData] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:3001/api/dashboard")
      .then(res => setData(res.data));

  }, []);

  return (

    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="endpoint" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" fill="#ff3b3b" />
    </BarChart>

  );
}