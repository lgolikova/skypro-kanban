import React, { useContext } from "react";
import Column from "../Column/Column";
import SContainer from "../Container.styled";
import {
    SMain,
    SMainBlock,
    SMainContent,
    SLoadingMessage,
} from "./Main.styled";
import { TaskContext } from "../../context/TaskContext";

function Main() {
    const { tasks, loading, error } = useContext(TaskContext);

    const statuses = [
        "Без статуса",
        "Нужно сделать",
        "В работе",
        "Тестирование",
        "Готово",
    ];

    if (loading)
        return (
            <SMain>
                <SContainer>
                    <SLoadingMessage>Данные загружаются...</SLoadingMessage>
                </SContainer>
            </SMain>
        );
    if (error)
        return (
            <SMain>
                <SContainer>
                    <SLoadingMessage>{error}</SLoadingMessage>
                </SContainer>
            </SMain>
        );

    return (
        <SMain>
            <SContainer>
                <SMainBlock>
                    <SMainContent>
                        {statuses.map((status) => (
                            <Column key={status} status={status} />
                        ))}
                    </SMainContent>
                </SMainBlock>
            </SContainer>
        </SMain>
    );
}

export default Main;
