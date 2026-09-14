import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setSuccess(false);
    setLoading(true);

    try {
      await register(name, email, password);

      setSuccess(true);
      setName("");
      setEmail("");
      setPassword("");

      setTimeout(() => {
        navigate("/login", { state: { justRegistered: true } });
      }, 1500);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  const inputClasses =
    "w-full rounded-lg border border-slate-200 px-4 py-2 text-slate-800 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:placeholder-slate-400 dark:focus:border-indigo-400 dark:focus:ring-indigo-900";
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-100 via-white to-purple-100 px-4 py-10 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      <div className="mx-auto w-full max-w-md">
        <h1 className="mb-6 text-center text-3xl font-bold text-slate-800 dark:text-slate-100">
          Registrierung
        </h1>
        <div className="rounded-2xl bg-white p-6 shadow-xl shadow-indigo-100 dark:bg-slate-800 dark:shadow-black/30">
          {error && (
            <p className="mb-4 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600 dark:bg-red-900/30 dark:text-red-400">
              {error}
            </p>
          )}
          {success && (
            <p className="mb-4 rounded-lg bg-green-50 px-4 py-2 text-sm text-green-600 dark:bg-green-900/30 dark:text-green-400">
              Registrierung erfolgreich! Du kannst dich jetzt einloggen
            </p>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="name"
              className={inputClasses}
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              className={inputClasses}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className={inputClasses}
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-1 rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700 active:bg-indigo-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Registrieren..." : "Registrieren"}
            </button>
          </form>
          <Link
            to="/login"
            className="mt-4 block w-full text-center text-sm text-indigo-600 transition hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            Zurück zum Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
