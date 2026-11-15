import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { AuthUser } from "../types";

interface StoredUser {
  name: string;
  password: string;
  avatar?: string;
  bio?: string;
}

interface AuthContextType {
  user: AuthUser | null;
  register: (name: string, password: string) => string | null;
  login: (name: string, password: string) => string | null;
  logout: () => void;
  updateProfile: (patch: Partial<Omit<AuthUser, "name">>) => string | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

function getUsers(): StoredUser[] {
  return JSON.parse(localStorage.getItem("users") || "[]");
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => {
    const saved = localStorage.getItem("currentUser");
    return saved ? JSON.parse(saved) : null;
  });

  const register = (name: string, password: string) => {
    const users = getUsers();
    if (users.some((u) => u.name === name)) return "Bu ism band";
    localStorage.setItem("users", JSON.stringify([...users, { name, password }]));
    return null;
  };

  const login = (name: string, password: string) => {
    const found = getUsers().find(
      (u) => u.name === name && u.password === password
    );
    if (!found) return "Ism yoki parol xato";
    const current: AuthUser = { name, avatar: found.avatar, bio: found.bio };
    localStorage.setItem("currentUser", JSON.stringify(current));
    setUser(current);
    return null;
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  const updateProfile = (patch: Partial<Omit<AuthUser, "name">>) => {
    if (!user) return "Avval tizimga kiring";
    const updated = { ...user, ...patch };
    try {
      const users = getUsers().map((u) =>
        u.name === user.name
          ? { ...u, avatar: updated.avatar, bio: updated.bio }
          : u
      );
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify(updated));
    } catch {
      return "Saqlab bo'lmadi: rasm juda katta bo'lishi mumkin";
    }
    setUser(updated);
    return null;
  };

  return (
    <AuthContext.Provider
      value={{ user, register, login, logout, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth faqat AuthProvider ichida ishlaydi");
  return ctx;
}