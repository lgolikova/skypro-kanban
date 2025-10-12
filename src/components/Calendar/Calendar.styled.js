import styled, { css } from "styled-components";

export const SCalendar = styled.div`
    width: 182px;
    margin-bottom: 20px;
`;

export const SCalendarTitle = styled.p`
    margin-bottom: 14px;
    padding: 0 7px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`;

export const SCalendarBlock = styled.div`
    display: block;
`;

export const SCalendarNav = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 14px;
    padding: 0 7px;
`;

export const SCalendarMonth = styled.div`
    color: #94a6be;
    font-size: 14px;
    line-height: 25px;
    font-weight: 600;
`;

export const SNavActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SNavAction = styled.div`
    width: 18px;
    height: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        fill: #94a6be;
    }
`;

export const SCalendarContent = styled.div`
    margin-bottom: 12px;
`;

export const SCalendarDaysNames = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 7px 0;
    padding: 0 7px;
`;

export const SCalendarDayName = styled.div`
    color: ${({ weekend }) => (weekend ? "#94a6be" : "#94a6be")};
    font-size: 10px;
    font-weight: 500;
    letter-spacing: -0.2px;

    ${({ weekend }) =>
        weekend &&
        css`
            opacity: 0.7;
        `}
`;

export const SCalendarCells = styled.div`
    width: 182px;
    height: 126px;
    display: flex;
    flex-wrap: wrap;
`;

export const SCalendarCell = styled.div`
    width: 22px;
    height: 22px;
    margin: 2px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    line-height: 1;
    letter-spacing: -0.2px;
    cursor: pointer;
    color: #94a6be;
    transition: all 0.2s ease-in-out;

    ${({ other }) =>
        other &&
        css`
            opacity: 0;
            pointer-events: none;
        `}

    ${({ weekend }) =>
        weekend &&
        css`
            color: #94a6be;
        `}

    ${({ current }) =>
        current &&
        css`
            font-weight: 700;
        `}

    &:hover {
        background-color: #eaeef6;
        color: #94a6be;
    }

    &.active {
        background-color: #94a6be;
        color: #ffffff;
    }
`;

export const SCalendarPeriod = styled.div`
    padding: 0 7px;

    p {
        color: #94a6be;
        font-size: 10px;
        line-height: 1;

        span {
            color: #000000;
        }
    }
`;
