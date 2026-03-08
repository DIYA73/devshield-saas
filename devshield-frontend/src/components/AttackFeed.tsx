import { useEffect, useState } from "react";

type Feed = {
  time: string
  country: string
  type: string
};

export default function AttackFeed() {

  const [feed, setFeed] = useState<Feed[]>([]);

  useEffect(() => {

    const interval = setInterval(() => {

      const countries = ["Iran", "China", "Russia", "USA", "Israel"];
      const attacks = ["SQL Injection", "Bot Attack", "Brute Force", "DDoS Probe"];

      const newAttack: Feed = {
        time: new Date().toLocaleTimeString(),
        country: countries[Math.floor(Math.random() * countries.length)],
        type: attacks[Math.floor(Math.random() * attacks.length)]
      };

      setFeed(prev => [newAttack, ...prev.slice(0, 8)]);

    }, 2000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="card">

      <h3 className="section-title">⚡ Live Attack Feed</h3>

      <ul>

        {feed.map((item, i) => (

          <li key={i}>
            {item.time} — {item.country} — {item.type}
          </li>

        ))}

      </ul>

    </div>

  );
}