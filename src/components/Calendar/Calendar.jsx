import React, { useState } from "react";
import {
    CalendarWrapper,
    CalendarHeader,
    Button,
    MonthYear,
    DaysOfWeek,
    Day,
    DaysOfWeekItem,
    DaysGrid,
    EmptyDay,
    FooterText,
} from "./Calendar.styled";

const daysOfWeek = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

function Calendar({ onChange = () => {}, disabled }) {
    // ✅ ОДИН источник правды
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [currentDate, setCurrentDate] = useState(
        new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1)
    );

    const startOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
    );
    const endOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    );

    const startDay = (startOfMonth.getDay() + 6) % 7;
    const daysInMonth = endOfMonth.getDate();

    const days = [];

    for (let i = 0; i < startDay; i++) days.push(null);
    for (let d = 1; d <= daysInMonth; d++) {
        days.push(
            new Date(currentDate.getFullYear(), currentDate.getMonth(), d)
        );
    }

    const isSameDay = (a, b) =>
        a &&
        b &&
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate();

    const handleDayClick = (day) => {
        if (disabled) return;
        setSelectedDate(day);
        onChange(day);
    };

    return (
        <CalendarWrapper>
            <CalendarHeader>
                <MonthYear>
                    {currentDate
                        .toLocaleString("ru-RU", {
                            month: "long",
                            year: "numeric",
                        })
                        .replace(/^./, (s) => s.toUpperCase())}

                    <div style={{ display: "flex", gap: 6 }}>
                        <Button
                            onClick={() =>
                                setCurrentDate(
                                    new Date(
                                        currentDate.getFullYear(),
                                        currentDate.getMonth() - 1,
                                        1
                                    )
                                )
                            }
                        >
                            ❮
                        </Button>
                        <Button
                            onClick={() =>
                                setCurrentDate(
                                    new Date(
                                        currentDate.getFullYear(),
                                        currentDate.getMonth() + 1,
                                        1
                                    )
                                )
                            }
                        >
                            ❯
                        </Button>
                    </div>
                </MonthYear>
            </CalendarHeader>

            <DaysOfWeek>
                {daysOfWeek.map((d) => (
                    <DaysOfWeekItem key={d}>{d}</DaysOfWeekItem>
                ))}
            </DaysOfWeek>

            <DaysGrid>
                {days.map((day, i) =>
                    day ? (
                        <Day
                            key={i}
                            $isSelected={isSameDay(day, selectedDate)}
                            onClick={() => handleDayClick(day)}
                        >
                            {day.getDate()}
                        </Day>
                    ) : (
                        <EmptyDay key={i} />
                    )
                )}
            </DaysGrid>

            <FooterText>
                Срок исполнения: {selectedDate.toLocaleDateString("ru-RU")}
            </FooterText>
        </CalendarWrapper>
    );
}

export default Calendar;
