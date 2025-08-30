"use client";

import { useState } from "react";
import { loginUser } from "../services/api";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await loginUser({ email, password });
        if (result.Token) {
            localStorage.setItem("token", result.token);
            setMessage("Login bem-sucedido!");
        } else {
            setMessage(result || "Erro no login");
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit">Entrar</button>
            </form>
            <p>{message}</p>
        </div>
    );
}