import { useEffect, useState } from "react";
import api from "../../services/api";

interface EndpointDoc {
  method: string;
  url: string;
  auth: string;
}

interface DocsResponse {
  endpoints: EndpointDoc[];
}

export default function Docs() {

  const [docs, setDocs] = useState<DocsResponse | null>(null);

  useEffect(() => {
    api.get("/docs").then((res) => {
      setDocs(res.data);
    });
  }, []);

  if (!docs) {
    return <div className="p-6">Loading docs...</div>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        DevShield API Docs
      </h1>

      <pre className="bg-gray-900 p-4 rounded text-green-400 mb-6">
{`npm install devshield-sdk

import { track } from "devshield-sdk"

track("API_KEY", "/users")
`}
      </pre>

      {docs.endpoints.map((ep, i) => (
        <div key={i} className="border p-4 mb-4 rounded">

          <p>
            <b>{ep.method}</b> {ep.url}
          </p>

          <p className="text-gray-500">
            Auth: {ep.auth}
          </p>

        </div>
      ))}

    </div>
  );
}