import { useTodos } from "../context/todoContext";

function TodoModal({ todo }) {
  const { setEditingId, setNewTitle, newTitle, editTodo } = useTodos();

  async function saveEdit(id) {
    await editTodo(id, {
      title: newTitle,
    });
    setEditingId(null);
  }

  function cancelEdit() {
    setEditingId(null);
    setNewTitle("");
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-md bg-white rounded-xl p-6 shadow-xl dark:bg-slate-800">
        <h2 className="mb-4 text-lg font-semibold text-slate-700 dark:text-slate-100">
          Todo bearbeiten
        </h2>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          autoFocus
          className="w-full border border-slate-300 rounded-md px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:focus:ring-indigo-900"
        />
        <div className="mt-5 flex justify-end gap-2">
          <button
            type="button"
            onClick={cancelEdit}
            className="bg-slate-200 rounded-md px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-300 dark:bg-slate-600 dark:text-slate-100 dark:hover:bg-slate-500"
          >
            Abrechen
          </button>
          <button
            type="button"
            onClick={() => saveEdit(todo._id)}
            className="bg-indigo-500 rounded-md px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
          >
            Speichern
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoModal;
