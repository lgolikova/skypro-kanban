import React from "react";
import Calendar from "../../Calendar/Calendar";
import { cardList } from '../../../data';
import { useNavigate } from "react-router-dom";
import { theme } from '../../theme';

function PopBrowse({ cardId }) {
    const card = cardList.find((c) => c.id === Number(cardId));
    const navigate = useNavigate();

    if (!card) {
        return (
            <div className="pop-browse">
                <div className="pop-browse__container">
                    <div className="pop-browse__block">
                        <p>Карточка не найдена</p>
                        <button onClick={() => navigate("/")}>Закрыть</button>
                    </div>
                </div>
            </div>
        );
    }

    const cardTheme = theme.topics[card.topic.toLowerCase()] || theme.topics.default;

    return (
        <div className="pop-browse" id="popBrowse">
            <div className="pop-browse__container">
                <div className="pop-browse__block">
                    <div className="pop-browse__content">
                        <div className="pop-browse__top-block">
                            <h3 className="pop-browse__ttl">{card.title}</h3>
                            <div className="categories__theme theme-top _active-category"
                            style={{
                                backgroundColor: cardTheme.background,
                                color: cardTheme.color
                            }}>
                                <p>{card.topic}</p>
                            </div>
                        </div>

                        <div className="pop-browse__status status">
                            <p className="status__p subttl">Статус</p>
                            <div className="status__themes">
                                <div className="status__theme">
                                    <p>{card.status}</p>
                                </div>
                            </div>
                        </div>

                        <div className="pop-browse__wrap">
                            <form className="pop-browse__form form-browse" id="formBrowseCard" action="#">
                            <div className="form-browse__block">
                                <label htmlFor="textArea01" className="subttl">Описание задачи</label>
                                <textarea className="form-browse__area" id="textArea01" readOnly placeholder="Введите описание задачи..."></textarea>
                            </div>
                            </form>

                            <Calendar />
                        </div>

                        <div className="theme-down__categories theme-down">
                            <p className="categories__p subttl">Категория</p>
                            <div className="categories__theme _orange _active-category">
                            <p className="_orange">Web Design</p>
                            </div>
                        </div>

                        <div className="pop-browse__btn-browse">
                            <div className="btn-group">
                            <button className="btn-browse__edit _btn-bor _hover03"><a href="#">Редактировать задачу</a></button>
                            <button className="btn-browse__delete _btn-bor _hover03"><a href="#">Удалить задачу</a></button>
                            </div>
                            <button className="btn-browse__close _btn-bg _hover01" onClick={() => navigate("/")}>Закрыть</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopBrowse;

