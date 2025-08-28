const BASE_URL = "http://localhost:8080"; // backend

export const registerUser = async (data) => {
    const res = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return res.json();
};

export const loginUser = async (data) => {
    const res = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    return res.json();
};
export async function getUsers(token) {
    const response = await fetch(`${BASE_URL}/users`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` // JWT
        }
    });
    return response.json();
}