import { Routes, Route, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import MainPage from "./pages/MainPage";
import CardPage from "./pages/CardPage";
import NewCardPage from "./pages/NewCardPage";
import ExitPage from "./pages/ExitPage";
import NotFoundPage from "./pages/NotFoundPage";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";

export default function AppRoutes() {
    return (
            <Routes>
                <Route path="/" element={<MainPage />} >
                    <Route path="card/:id" element={<CardPage />} />
                    <Route path="new" element={<NewCardPage />} />
                    <Route path="exit" element={<ExitPage />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
    );
}


