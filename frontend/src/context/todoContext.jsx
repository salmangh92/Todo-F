import { createContext, useContext, useEffect, useState } from "react";
import { createTodo, deleteTodo, fetchTodos, updateTodo } from "../api/todos";
import { useAuth } from "./authContext";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const { isLoggedIn } = useAuth();
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  // get Todos
  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    async function getTodos() {
      const todos = await fetchTodos();
      setTodos(todos);
    }
    getTodos();
  }, [isLoggedIn]);

  // Todo erstellen
  async function addTodo(title) {
    const newTodo = await createTodo(title);

    setTodos((prev) => [...prev, newTodo]);
  }

  // todo aktualisieren
  async function editTodo(id, update) {
    const updated = await updateTodo(id, update);
    setTodos((prev) => prev.map((t) => (t._id === id ? updated : t)));
  }

  // todo löschen
  async function removeTodo(id) {
    await deleteTodo(id);
    setTodos((prev) => prev.filter((t) => t._id !== id));
  }

  //--------
  return (
    <TodoContext.Provider
      value={{
        todos,
        filter,
        setFilter,
        addTodo,
        editTodo,
        removeTodo,
        editingId,
        setEditingId,
        newTitle,
        setNewTitle,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTodos = () => useContext(TodoContext);
