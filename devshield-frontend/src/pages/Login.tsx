import { useState } from "react";
import axios from "axios";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {

    const res = await axios.post("http://localhost:3001/api/auth/login", {
      email,
      password
    });

    localStorage.setItem("token", res.data.token);

    alert("Login success");

  };

  return (
    <div>
      <h1>DevShield Login</h1>

      <input
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={login}>
        Login
      </button>
    </div>
  );
}