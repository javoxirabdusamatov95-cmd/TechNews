import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const error = login(name, password);
    if (error) {
      alert(error);
      return;
    }
    navigate("/");
  };

  return (
    <div className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Xush kelibsiz</h2>
        <p className="auth-subtitle">Hisobingizga kiring</p>

        <label className="field">
          <span>Ism</span>
          <input
            type="text"
            placeholder="Ismingizni kiriting"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label className="field">
          <span>Parol</span>
          <input
            type="password"
            placeholder="Parolingizni kiriting"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit">Kirish</button>

        <p className="auth-switch">
          Hisobingiz yo'qmi? <Link to="/register">Ro'yxatdan o'ting</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;