import React from "react";
import Calendar from "../../Calendar/Calendar";

function PopNewCard() {
    return (
        <div id="popNewCard" className="popup">
        <div className="popup__content">
            <div className="pop-new-card">
            <h3 className="pop-new-card__title">Создать новую задачу</h3>

            <form className="pop-new-card__form">
                <div className="pop-new-card__block">
                <label className="pop-new-card__label">Название задачи</label>
                <input type="text" className="pop-new-card__input" />
                </div>

                <div className="pop-new-card__block">
                <label className="pop-new-card__label">Описание задачи</label>
                <textarea className="pop-new-card__textarea"></textarea>
                </div>

                <Calendar />

                <div className="pop-new-card__block">
                <button type="submit" className="pop-new-card__btn">
                    Создать
                </button>
                <a href="#" className="pop-new-card__close">
                    Закрыть
                </a>
                </div>
            </form>
            </div>
        </div>
        </div>
    );
}

export default PopNewCard;