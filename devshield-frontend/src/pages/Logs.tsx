import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Logs() {

 interface LogItem {
  _id: string;
  endpoint: string;
  method: string;
  createdAt: string;
}

const [logs, setLogs] = useState<LogItem[]>([]);

  useEffect(() => {

    const apiKey = prompt("Enter API Key");

    api.get(`/logs/${apiKey}`).then(res => {
      setLogs(res.data);
    });

  }, []);

  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        API Logs
      </h1>

      <table className="w-full">

        <thead>
          <tr>
            <th>Endpoint</th>
            <th>Method</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>

          {logs.map((log) => (
            <tr key={log._id}>
              <td>{log.endpoint}</td>
              <td>{log.method}</td>
              <td>{log.createdAt}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}