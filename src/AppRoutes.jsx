import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import MainPage from "./pages/MainPage";
// import CardPage from "./pages/CardPage";
// import NewCardPage from "./pages/NewCardPage";
import ExitPage from "./pages/ExitPage";

export default function AppRoutes() {
    return (
            <Routes>
                <Route path="/" element={<MainPage />} />
                    {/* <Route path="/card" element={<CardPage />} /> */}
                    {/* <Route path="/new" element={<NewCardPage />} /> */}
                <Route path="/exit" element={<ExitPage />} />

                {/* <Route path="/sign-in" element={<SignInPage />} />
                <Route path="/sign-up" element={<SignUpPage />} /> */}
            </Routes>
    );
}


