"use client";
import { useState } from "react";

export default function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState(null);

    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8080/users";

    const registerUser = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`${BASE_URL}/users/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password }),
            });

            if (!res.ok) {
                throw new Error("Erro ao registrar usuário");
            }

            const data = await res.json();
            console.log("Usuário registrado com sucesso:", data);

        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <form
            onSubmit={registerUser}
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                maxWidth: "300px",
                margin: "auto",
            }}
        >
            <h2>Registrar</h2>

            <input
                type="text"
                placeholder="Nome de usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />

            <input
                type="email"
                placeholder="Seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <input
                type="password"
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <button type="submit">Registrar</button>

            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    );
}