import ThemeToggle from "../components/ThemeToggle";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import TodoTabs from "../components/TodoTabs";
import { useAuth } from "../context/authContext";

function TodoPage() {
  const { logout, user } = useAuth();
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-100 via-white to-purple-100 px-4 py-10  dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      <ThemeToggle />
      <div className="mx-auto w-full max-w-md">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Willcommen
            </p>
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
              {`Hello ${user.name}`} 👋
            </h2>
          </div>
          <button
            type="button"
            onClick={logout}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"
          >
            Logout
          </button>
        </div>
        <h1 className="mb-6 text-center text-3xl font-bold text-slate-800 dark:text-slate-100">
          Meine Todos
        </h1>
        <div className="rounded-2xl bg-white p-6 shadow-xl shadow-indigo-100 dark:bg-slate-800 dark:shadow-black/30">
          <TodoForm />
          <TodoTabs />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default TodoPage;
