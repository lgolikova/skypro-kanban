import styled from "styled-components";

export const CalendarWrapper = styled.div`
    width: 200px;
    font-family: "Roboto", sans-serif;
    color: #94a6be;
    user-select: none;
`;

export const CalendarHeader = styled.div`
    margin-bottom: 8px;
`;

export const Button = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 14px;
    color: #94a6be;

    &:hover {
        color: #565eef;
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }
`;

export const MonthYear = styled.div`
    font-weight: 600;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const DaysOfWeek = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 11px;
    font-weight: 600;
    margin-bottom: 6px;
`;

export const DaysOfWeekItem = styled.div`
    width: 28px;
    text-align: center;
`;

export const DaysGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Day = styled.div`
    width: 28px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    border-radius: 50%;
    cursor: pointer;
    font-size: 10px;
    font-weight: 700;
    color: #94a6be;

    ${({ $isToday }) =>
        $isToday &&
        `
        font-weight: bold;
    `}

    ${({ $isSelected }) =>
        $isSelected &&
        `
        background-color: #94a6be;
        color: #ffffff;
    `}

    &:hover {
        background-color: #94a6be;
        color: #ffffff;
    }
`;

export const EmptyDay = styled.div`
    width: 28px;
    height: 28px;
`;

export const FooterText = styled.div`
    margin-top: 10px;
    font-size: 12px;
    font-weight: 500;
`;
