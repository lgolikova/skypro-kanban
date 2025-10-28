import React from "react";
import PopNewCard from '../components/popups/PopNewCard/PopNewCard';
import { addTask } from "../../src/services/api";
import { useNavigate } from "react-router-dom";

function NewCardPage({ token }) {
    const navigate = useNavigate();
    // const token = "ksdfsksdfjfsdjk";

    const handleAddTask = async (newTaskData) => {
        try {

            const userInfo = JSON.parse(localStorage.getItem("userInfo"));
            const token = userInfo?.token;

            if (!token) {
                alert("Нет токена. Пожалуйста, авторизуйтесь.");
                navigate("/login");
                return;
            }

            await addTask(token, newTaskData);
            alert("Задача успешно добавлена!");
            navigate("/");
        } catch (error) {
            alert("Ошибка при добавлении задачи: " + error.message);
        }
    };

    return (
        <>
            <PopNewCard onSubmit={handleAddTask}/>
        </>
    );
}

export default NewCardPage;