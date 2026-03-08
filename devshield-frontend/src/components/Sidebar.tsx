import { NavLink } from "react-router-dom";

export default function Sidebar(){

  return(

    <div className="sidebar">

      <h2>🛡 DevShield</h2>

      <nav>

        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/logs">Logs</NavLink>
        <NavLink to="/apikeys">API Keys</NavLink>
        <NavLink to="/billing">Billing</NavLink>
        <NavLink to="/docs">Docs</NavLink>

      </nav>

    </div>

  )

}