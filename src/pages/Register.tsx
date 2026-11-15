import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Parollar mos kelmadi");
      return;
    }
    const error = register(name, password);
    if (error) {
      alert(error);
      return;
    }
    navigate("/login");
  };

  return (
    <div className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Hisob yarating</h2>
        <p className="auth-subtitle">Bir daqiqada ro'yxatdan o'ting</p>

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
            placeholder="Parol o'ylab toping"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <label className="field">
          <span>Parolni takrorlang</span>
          <input
            type="password"
            placeholder="Parolni qayta kiriting"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
        </label>

        <button type="submit">Ro'yxatdan o'tish</button>

        <p className="auth-switch">
          Hisobingiz bormi? <Link to="/login">Kiring</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;