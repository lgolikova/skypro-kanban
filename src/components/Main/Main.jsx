import React, { useState, useEffect } from "react";
import Column from '../Column/Column'
import {cardList} from "../../data"

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
            <main className="main">
                <div className="container">
                    <div
                        style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "60vh",
                        fontSize: "20px",
                        color: "#94A6BE",
                        fontWeight: "500",
                        }}
                    >
                        Данные загружаются...
                    </div>
                </div>
            </main>
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
        <main className="main">
            <div className="container">
                <div className="main__block">
                <div className="main__content">
                    {statuses.map((status) => (
                    <Column
                        key={status}
                        title={status}
                        cards={cardList.filter((card) => card.status === status)}
                    />
                    ))}
                </div>
                </div>
            </div>
        </main>
    );
}

export default Main