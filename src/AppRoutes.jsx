import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";

import MainPage from "./pages/MainPage";
import CardPage from "./pages/CardPage";
import NewCardPage from "./pages/NewCardPage";
import ExitPage from "./pages/ExitPage";
import NotFoundPage from "./pages/NotFoundPage";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";

import { AuthContext } from "./context/AuthContext";

export default function AppRoutes() {
    const { user, loading } = useContext(AuthContext);

    const PrivateRoute = () => {
        if (loading) return <div>Загрузка...</div>;
        return user ? <Outlet /> : <Navigate to="/login" replace />;
    };

    return (
        <Routes>
            <Route element={<PrivateRoute />}>
                <Route path="/" element={<MainPage />}>
                    <Route path="card/:id" element={<CardPage />} />
                    <Route path="new" element={<NewCardPage />} />
                    <Route path="exit" element={<ExitPage />} />
                </Route>
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}
