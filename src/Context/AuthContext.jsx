// src/Context/AuthContext.jsx
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [user, setUser] = useState(null);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <AuthContext.Provider
            value={{ isSidebarOpen, toggleSidebar, user, setUser }}
        >
            {children}
        </AuthContext.Provider>
    );
};
