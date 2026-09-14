import { BASE_URL } from "./client";

const AUTH_URL = `${BASE_URL}/auth`;

export async function registerRequest(name, email, password) {
  const res = await fetch(`${AUTH_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  if (!res.ok) {
    throw new Error("Registrierung fehlgeschlagen");
  }
  return res.json();
}

export async function loginRequest(email, password) {
  const res = await fetch(`${AUTH_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error("Login fehlgeschlagen");
  }
  return res.json();
}
