import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Settings = {
  theme: "dark" | "light";
  accent: "violet" | "blue" | "green" | "orange";
  font: "sans" | "serif" | "mono";
  fontSize: "sm" | "md" | "lg";
};

const defaults: Settings = { theme: "dark", accent: "violet", font: "sans", fontSize: "md" };

const SettingsContext = createContext<{
  settings: Settings;
  update: (patch: Partial<Settings>) => void;
  toggleTheme: () => void;
  reset: () => void;
} | null>(null);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(() => {
    try {
      return { ...defaults, ...JSON.parse(localStorage.getItem("settings") || "{}") };
    } catch {
      return defaults;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = settings.theme;
    root.dataset.accent = settings.accent;
    root.dataset.font = settings.font;
    root.dataset.size = settings.fontSize;
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  const update = (patch: Partial<Settings>) => setSettings((s) => ({ ...s, ...patch }));
  const toggleTheme = () =>
    setSettings((s) => ({ ...s, theme: s.theme === "dark" ? "light" : "dark" }));
  const reset = () => setSettings(defaults);

  return (
    <SettingsContext.Provider value={{ settings, update, toggleTheme, reset }}>
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings SettingsProvider ichida ishlatilishi kerak");
  return ctx;
}