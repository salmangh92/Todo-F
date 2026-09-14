import { useTodos } from "../context/todoContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import TodoModal from "./TodoModal";

function TodoList() {
  const {
    todos,
    filter,
    editTodo,
    setEditingId,
    setNewTitle,
    editingId,
    removeTodo,
  } = useTodos();

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "open") return !todo.completed;
    return true;
  });

  function startEdit(todo) {
    setEditingId(todo._id);
    setNewTitle(todo.title);
  }

  if (todos.length === 0) {
    return (
      <p className="text-slate-600 dark:text-slate-300">
        Noch keine Todos - leg direkt los!
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-2 ">
      {filteredTodos.map((todo) => (
        <li
          key={todo._id}
          className=" flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 transition  hover:border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:hover:border-slate-500"
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => editTodo(todo._id, { completed: !todo.completed })}
            className="h-4 w-4 shrink-0 cursor-pointer accent-indigo-600"
          />
          {editingId === todo._id ? (
            <TodoModal todo={todo} />
          ) : (
            <>
              <span
                className={`flex-1 text-sm ${todo.completed ? "text-slate-400 line-through dark:text-slate-500" : "text-slate-800 dark:text-slate-100"}`}
              >
                {todo.title}
              </span>

              {!todo.completed && (
                <button
                  type="button"
                  onClick={() => startEdit(todo)}
                  aria-label="Bearbeiten"
                  title="Bearbeiten"
                  className="cursor-pointer rounded-md p-1 text-base text-indigo-600 transition hover:bg-indigo-50 hover:text-indigo-800 dark:text-indigo-400 dark:hover:bg-indigo-950 dark:hover:text-indigo-300"
                >
                  <FaRegEdit />
                </button>
              )}
              <button
                type="button"
                onClick={() => removeTodo(todo._id)}
                aria-label="Löschen"
                title="Löschen"
                className="cursor-pointer rounded-md p-1 text-base text-red-500 transition hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-950 dark:hover:text-red-300"
              >
                <RiDeleteBin6Line />
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
