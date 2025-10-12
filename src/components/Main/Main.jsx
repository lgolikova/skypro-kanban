import React, { useState, useEffect } from "react";
import Column from '../Column/Column';
import {cardList} from "../../data";
import SContainer from "../Container.styled";
import { SMain, SMainBlock, SMainContent, SLoadingMessage } from "./Main.styled";

function Main() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
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
                            cards={cardList.filter((card) => card.status === status)}
                        />
                        ))}
                    </SMainContent>
                </SMainBlock>
            </SContainer>
        </SMain>
    );
}

export default Main