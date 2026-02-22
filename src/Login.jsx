import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (username === "admin" && password === "1234") {
      onLogin(username);
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Student Task Manager</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
}

export default Login;