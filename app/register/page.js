"use client";
import { useState } from "react";

export default function RegisterPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);

    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8080";

    const registerUser = async (e) => {
        e.preventDefault();
        setMessage("");
        try {
            const res = await fetch(`${BASE_URL}/users/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await res.json();
            if (!res.ok) {
                setMessage("Erro ao registrar usuário");
                setIsError(true);
            } else {
                setMessage("Usuario adicionado");
                setIsError(false);
            }


        } catch (err) {
            setError(err.message);
        }
    };
    return (
        <main>
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

                <p style={{ color: isError ? "red" : "green" }}>{message}</p>
            </form>
        </main>
    );
}