"use client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./index.css";
import HomePage from "./app/page.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  </StrictMode>
);
