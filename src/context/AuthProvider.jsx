import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        try {
        const storedUser = localStorage.getItem("userInfo");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        } catch (error) {
        console.error("Ошибка при загрузке userInfo из localStorage:", error);
        }
    }, []);

    const updateUserInfo = (userData) => {
        setUser(userData);
        if (userData) {
        localStorage.setItem("userInfo", JSON.stringify(userData));
        } else {
        localStorage.removeItem("userInfo");
        }
    };

    const login = (userData) => {
        updateUserInfo(userData);
        return true;
    };

    const logout = () => {
        updateUserInfo(null);
        return true;
    };

    return (
        <AuthContext.Provider value={{ user, setUser, login, logout, updateUserInfo }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;