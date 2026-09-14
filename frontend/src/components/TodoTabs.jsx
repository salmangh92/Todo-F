import { useTodos } from "../context/todoContext";

const TABS = [
  { key: "all", label: "Alle" },
  { key: "open", label: "Offen" },
  { key: "completed", label: "Erledigt" },
];

function TodoTabs() {
  const { filter, setFilter } = useTodos();
  return (
    <div className="mb-4 flex gap-1 bg-slate-100 rounded-lg p-1 dark:bg-slate-700">
      {TABS.map((tab) => (
        <button
          key={tab.key}
          type="button"
          onClick={() => setFilter(tab.key)}
          className={`flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition ${
            filter === tab.key
              ? "bg-white text-indigo-600 shadow-sm dark:bg-slate-800 dark:text-indigo-400"
              : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default TodoTabs;
