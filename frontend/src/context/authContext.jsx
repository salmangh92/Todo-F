import { createContext, useContext, useState } from "react";
import { loginRequest, registerRequest } from "../api/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [token, setToken] = useState(() => localStorage.getItem("token"));

  // ---------
  function saveAuth(data) {
    setUser(data.user);
    setToken(data.token);

    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
  }

  // REGISTER
  async function register(name, email, password) {
    return registerRequest(name, email, password);
  }

  // LOGIN
  async function login(email, password) {
    const data = await loginRequest(email, password);
    saveAuth(data);
    return data;
  }

  // LOGOUT
  function logout() {
    setUser(null);
    setToken(null);

    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }
  return (
    <AuthContext.Provider
      value={{ user, token, register, login, logout, isLoggedIn: !!token }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
