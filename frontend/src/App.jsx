import { Navigate, Route, Routes } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useAuth } from "./context/authContext";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      <Route
        path="/login"
        element={
          isLoggedIn ? (
            <Navigate to="/" replace />
          ) : (
            <div>
              <ThemeToggle />
              <Login />
            </div>
          )
        }
      />
      <Route
        path="/register"
        element={
          <div>
            <ThemeToggle />
            <Register />
          </div>
        }
      />
      <Route
        path="/"
        element={isLoggedIn ? <TodoPage /> : <Navigate to="/login" replace />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
