import { BASE_URL, getAuthHeaders, handleResponse } from "./client";

const TODOS_URL = `${BASE_URL}/todos`;

// Alle todo abrufen
export async function fetchTodos() {
  const res = await fetch(TODOS_URL, {
    headers: getAuthHeaders(),
  });

  return handleResponse(res);
}

// Todo erstellen
export async function createTodo(title) {
  const res = await fetch(TODOS_URL, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify({ title }),
  });

  return handleResponse(res);
}

// Todo Aktulisieren
export async function updateTodo(id, update) {
  const res = await fetch(`${TODOS_URL}/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(update),
  });

  return handleResponse(res);
}

// Todo löschen
export async function deleteTodo(id) {
  const res = await fetch(`${TODOS_URL}/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });

  return handleResponse(res);
}
