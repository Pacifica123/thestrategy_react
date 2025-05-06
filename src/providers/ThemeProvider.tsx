import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

// Тип темы — можешь расширить под свои нужды
export type Theme = "light" | "dark";

interface ThemeContextValue {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        // Попытка взять сохранённое из localStorage или дефолт
        const saved = window.localStorage.getItem("theme") as Theme | null;
        return saved ?? "light";
    });

    // При смене темы — обновляем атрибут на <html> и localStorage
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
        </ThemeContext.Provider>
    );
};

// Хук-побочный эффект для доступа к теме внутри компонентов
export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return ctx;
}
