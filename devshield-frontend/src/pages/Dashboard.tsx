import AttackFeed from "../components/AttackFeed";
import AIThreatPanel from "../components/AIThreatPanel";

import CyberAttackMap from "../components/CyberAttackMap";
import AttackLogs from "../components/AttackLogs";
import CyberGlobe from "../components/CyberGlobe";
import AttackChart from "../components/AttackChart";

export default function Dashboard() {

  return (

    <div className="dashboard-container">

      <h1 className="title">🛡 DevShield Security Center</h1>

      <div className="card">
        <h3>🌍 Global Cyber Attacks</h3>
        <p>Live attack visualization will appear here.</p>
      </div>

      <div className="grid">

  <div className="grid-item large">
    <CyberGlobe />
  </div>

  <div className="grid-item large">
    <CyberAttackMap />
  </div>

  <div className="grid-item">
    <AIThreatPanel />
  </div>
<div className="grid-item">
  <AttackChart />
</div>
  <div className="grid-item">
    <AttackFeed />
  </div>

  <div className="grid-item">
    <AttackLogs />
  </div>

</div>
</div>
);
}