import React, { useState, useEffect } from "react";
import {
    SCardsItem,
    SCard,
    SCardContent,
    SCardTitle,
    SCardDate,
    SCardBtn,
    SCardTheme,
    SCardGroup,
} from "./Card.styled";
import { Link } from "react-router-dom";
import Calendar from "../Calendar/Calendar";

function Card({ id, topic, title, date, onDateChange }) {
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(
        date instanceof Date ? date : new Date(date)
    );

    useEffect(() => {
        if (!date) return;
        const d = date instanceof Date ? date : new Date(date);
        setSelectedDate(d);
    }, [date]);

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
        onDateChange?.(newDate);
        setShowCalendar(false);
    };

    return (
        <SCardsItem>
            <SCard>
                <SCardGroup>
                    <SCardTheme topic={topic}>
                        <p>{topic}</p>
                    </SCardTheme>
                    <Link to={`/card/${id}`}>
                        <SCardBtn>
                            <div />
                            <div />
                            <div />
                        </SCardBtn>
                    </Link>
                </SCardGroup>

                <SCardContent>
                    <SCardTitle>{title}</SCardTitle>

                    <SCardDate onClick={() => setShowCalendar(!showCalendar)}>
                        {selectedDate.toLocaleDateString("ru-RU")}
                    </SCardDate>

                    {showCalendar && (
                        <Calendar
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                    )}
                </SCardContent>
            </SCard>
        </SCardsItem>
    );
}

export default Card;
