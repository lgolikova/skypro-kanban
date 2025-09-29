import React from "react";

function Card({ theme, category, date }) {
    return (
        <div className="cards__item">
            <div className="cards__card card">
            <div className="card__group">
                <div className={`card__theme ${theme}`}>
                <p className={theme}>{category}</p>
                </div>
                <a href="#popBrowse" target="_self">
                <div className="card__btn">
                    <div></div><div></div><div></div>
                </div>
                </a>
            </div>
            <div className="card__content">
                <a href="" target="_blank">
                <h3 className="card__title">Название задачи</h3>
                </a>
                <div className="card__date">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M10.5625 2.03125H2.4375" stroke="#94A6BE" strokeWidth="0.8" />
                </svg>
                <p>{date}</p>
                </div>
            </div>
            </div>
        </div>
        )
    }

export default Card