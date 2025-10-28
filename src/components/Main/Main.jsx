import React, { useState, useEffect } from "react";
import Column from '../Column/Column';
import {cardList} from "../../data";
import SContainer from "../Container.styled";
import { SMain, SMainBlock, SMainContent, SLoadingMessage } from "./Main.styled";
import { getTasks } from "../../../src/services/api";
import { useNavigate } from "react-router-dom";

function Main() {

    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const loginData = { login: "admin", password: "admin" };

    useEffect(() => {
        async function loadTasks() {
            try {

                const loginResponse = await fetch("https://wedev-api.sky.pro/api/user/login", {
                    method: "POST",
                    headers: { "Content-Type": "" },
                    body: JSON.stringify(loginData)
                });

                if (!loginResponse.ok) {
                    throw new Error("Ошибка авторизации: " + loginResponse.status);
                }

                const loginResult = await loginResponse.json();
                const token = loginResult.user.token;
                localStorage.setItem("userInfo", JSON.stringify(loginResult.user));


                const tasksResponse = await fetch("https://wedev-api.sky.pro/api/kanban", {
                    headers: { "Authorization": "Bearer " + token }
                });

                if (!tasksResponse.ok) {
                    throw new Error("Ошибка загрузки задач: " + tasksResponse.status);
                }

                const tasks = await tasksResponse.json();
                setCards(tasks.tasks);
                console.log("Ответ задач:", tasks);

            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        loadTasks();
    }, []);

    if (isLoading) {
        return (
            <SMain>
                <SContainer>
                    <SLoadingMessage>
                        Данные загружаются...
                    </SLoadingMessage>
                </SContainer>
            </SMain>
        );
    }

    if (error) {
        return (
            <SMain>
                <SContainer>
                    <SLoadingMessage>
                        {error}
                    </SLoadingMessage>
                </SContainer>
            </SMain>
        );
    }

    const statuses = [
        "Без статуса",
        "Нужно сделать",
        "В работе",
        "Тестирование",
        "Готово",
    ];

    return (

        <SMain>
            <SContainer>
                <SMainBlock>
                    <SMainContent>
                        {statuses.map((status) => (
                        <Column
                            key={status}
                            title={status}
                            cards={cards.filter((card) => card.status === status)}
                        />
                        ))}
                    </SMainContent>
                </SMainBlock>
            </SContainer>
        </SMain>
    );
}

export default Main;