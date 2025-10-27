import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import MainPage from "./pages/MainPage";
import CardPage from "./pages/CardPage";
import NewCardPage from "./pages/NewCardPage";
import ExitPage from "./pages/ExitPage";
import NotFoundPage from "./pages/NotFoundPage";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";

export default function AppRoutes() {
    const [isAuth, setIsAuth] = useState(false);

    const PrivateRoute = () => {
        return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
    };

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    return (
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<MainPage isDarkTheme={false} onLogout={() => setIsAuth(false)} />} >
                        <Route path="card/:id" element={<CardPage />} />
                        <Route path="new" element={<NewCardPage />} />
                        <Route path="exit" element={<ExitPage setIsAuth={setIsAuth} />} />
                    </Route>
                </Route>

                <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
                <Route path="/register" element={<Register setIsAuth={setIsAuth}/>} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
    );
}


