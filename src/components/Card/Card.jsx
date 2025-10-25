import React from "react";
import { SCardsItem, SCard, SCardGroup, SCardContent, SCardTitle, SCardDate, SCardBtn, SCardTheme } from './Card.styled'
import { Link } from "react-router-dom";

function Card({ id, topic, title, date }) {
    return (
        <SCardsItem>
            <SCard>
                <SCardGroup>
                    <SCardTheme topic={topic}>
                        <p>{topic}</p>
                    </SCardTheme>
                    <Link to={`/card/${id}`} style={{ textDecoration: "none" }}>
                        <SCardBtn>
                            <div></div><div></div><div></div>
                        </SCardBtn>
                    </Link>
                </SCardGroup>
                <SCardContent>
                    <a href="#" target="_blank">
                    <SCardTitle>{title}</SCardTitle>
                    </a>
                    <SCardDate>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <path d="M10.5625 2.03125H2.4375C2.00304 2.03125 1.65625 2.37804 1.65625 2.8125V10.1875C1.65625 10.622 2.00304 10.9688 2.4375 10.9688H10.5625C10.997 10.9688 11.3438 10.622 11.3438 10.1875V2.8125C11.3438 2.37804 10.997 2.03125 10.5625 2.03125ZM10.9688 10.1875C10.9688 10.3976 10.7726 10.5938 10.5625 10.5938H2.4375C2.22739 10.5938 2.03125 10.3976 2.03125 10.1875V4.15625H10.9688V10.1875ZM10.9688 3.78125H2.03125V2.8125C2.03125 2.60239 2.22739 2.40625 2.4375 2.40625H10.5625C10.7726 2.40625 10.9688 2.60239 10.9688 2.8125V3.78125Z" stroke="#94A6BE" strokeWidth="0.8" />
                        </svg>
                        <p>{date}</p>
                    </SCardDate>
                </SCardContent>
            </SCard>
        </SCardsItem>
        )
    }

export default Card