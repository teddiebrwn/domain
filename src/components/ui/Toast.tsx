import * as React from "react";
import { createContext, useContext } from "react";

interface Toast {
  title: string;
  description?: string;
  variant?: "default" | "destructive";
}

interface ToastContextType {
  toast: (props: Toast) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const toast = React.useCallback((props: Toast) => {
    setToasts((prev) => [...prev, props]);
    setTimeout(() => {
      setToasts((prev) => prev.slice(1));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map((t, i) => (
          <div
            key={i}
            className={`rounded-lg p-4 shadow-lg ${
              t.variant === "destructive"
                ? "bg-red-500 text-white"
                : "bg-white text-gray-900 dark:bg-gray-800 dark:text-white"
            }`}
          >
            <div className="font-semibold">{t.title}</div>
            {t.description && (
              <div className="mt-1 text-sm">{t.description}</div>
            )}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
