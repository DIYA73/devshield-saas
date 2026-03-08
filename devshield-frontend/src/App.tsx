import {BrowserRouter,Routes,Route} from "react-router-dom"
import Sidebar from "./components/Sidebar"

import Dashboard from "./pages/Dashboard"
import Logs from "./pages/Logs"
import ApiKeys from "./pages/ApiKeys"
import Billing from "./pages/Billing"
import Docs from "./pages/Docs"

export default function App(){

return(

<BrowserRouter>

<div className="layout">

<Sidebar/>

<div className="content">

<Routes>

<Route path="/" element={<Dashboard/>}/>
<Route path="/logs" element={<Logs/>}/>
<Route path="/apikeys" element={<ApiKeys/>}/>
<Route path="/billing" element={<Billing/>}/>
<Route path="/docs" element={<Docs/>}/>

</Routes>

</div>

</div>

</BrowserRouter>

)

}