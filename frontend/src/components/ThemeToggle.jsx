import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        isDark ? "Zu hellem Modus wechseln" : "Zu dunklem Modus wechseln"
      }
      title={isDark ? "Heller Modus" : "Dunkler Modus"}
      className="fixed top-4 right-4 cursor-pointer rounded-full bg-white p-2.5 text-lg text-slate-600 shadow-md shadow-indigo-100 transition hover:text-indigo-600 dark:bg-slate-800 dark:text-slate-300 dark:shadow-black/30 dark:hover:text-indigo-400"
    >
      {isDark ? <FiSun /> : <FiMoon />}
    </button>
  );
}

export default ThemeToggle;
