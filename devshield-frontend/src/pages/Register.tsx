import { useState } from "react";
import axios from "axios";

export default function Register(){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const register = async ()=>{

    await axios.post("http://localhost:3001/api/auth/register",{
      email,
      password
    });

    alert("Account created");

  }

  return(

    <div>

      <h1>Create DevShield Account</h1>

      <input
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={register}>
        Register
      </button>

    </div>

  )

}