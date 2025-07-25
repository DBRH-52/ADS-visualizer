import React from 'react';
import { createContext } from 'react';
import { useContext, useState, useEffect } from 'react';
import { colors_light_mode, colors_dark_mode } from '@/styles/design-system';

type Theme = 'light' | 'dark';
const ThemeContext = createContext<{ 
    theme: Theme; toggleTheme: () => void }>({
        theme: "light", toggleTheme: () => {} 
    });

export const ThemeProvider: React.FC<{

    children: React.ReactNode }> = ({ children}) => {
        const [theme, setTheme] = useState<Theme>(
        () => (localStorage.getItem("theme") as Theme) || "light");
    
    useEffect(() => {
        const colors = theme === "light" ? colors_light_mode : colors_dark_mode;
        Object.entries(colors).forEach(([key, value]) => {
            document.body.style.setProperty(`--color-${key}`, value);
        });
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

    return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>;
    
};

export const useTheme = () => useContext(ThemeContext);