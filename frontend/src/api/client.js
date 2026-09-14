export const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5050";

export function getAuthHeaders() {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function handleResponse(res) {
  if (!res.ok) {
    throw new Error(`HTTP-Fehler: ${res.status}`);
  }
  return res.json();
}
