import { useState } from "react";
import { useTodos } from "../context/todoContext";

function TodoForm() {
  const { addTodo } = useTodos();
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    addTodo(input);
    setInput("");
  }

  const inputClasses =
    "flex-1 rounded-lg border border-slate-200 px-4 py-2 text-slate-800 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:placeholder-slate-400 dark:focus:border-indigo-400 dark:focus:ring-indigo-900";

  return (
    <form onSubmit={handleSubmit} className=" mb-6 flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Füg eine Todo hinzu..."
        className={inputClasses}
      />
      <button
        type="submit"
        className="mt-1 rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700 active:bg-indigo-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        Hinzufügen
      </button>
    </form>
  );
}

export default TodoForm;
