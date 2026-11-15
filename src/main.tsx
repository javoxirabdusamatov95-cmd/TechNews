import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { AuthProvider } from "./context/AuthContext";
import { ArticlesProvider } from "./context/ArticlesContext";
import "./index.css";
import { SettingsProvider } from "./context/SettingsContext.tsx";
import { ReviewsProvider } from "./context/ReviewsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ArticlesProvider>
          <SettingsProvider>
            <ReviewsProvider>
             <App />
          </ReviewsProvider>
          </SettingsProvider>
        </ArticlesProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
