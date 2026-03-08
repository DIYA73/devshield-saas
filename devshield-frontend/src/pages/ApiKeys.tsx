import { useEffect, useState } from "react";
import api from "../services/api";

export default function ApiKeys(){

  const [keys,setKeys] = useState<string[]>([])

  async function fetchKeys(){

    try{
      const res = await api.get("/apikeys")
      setKeys(res.data)
    }catch(err){
      console.log(err)
    }

  }

  async function createKey(){

    try{

      const res = await api.post("/apikeys")

      localStorage.setItem("apiKey",res.data.key)

      fetchKeys()

    }catch(err){
      console.log(err)
    }

  }

  useEffect(()=>{
    fetchKeys()
  },[])

  return(

    <div className="dashboard-container">

      <h1>API Keys</h1>

      <button onClick={createKey}>
        Generate API Key
      </button>

      <div style={{marginTop:20}}>

        {keys.map((k,i)=>(
          <div className="card" key={i}>
            {k}
          </div>
        ))}

      </div>

    </div>

  )

}