import React from "react";
import Calendar from "../../Calendar/Calendar";
import { theme } from '../../theme';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function PopNewCard({ onSubmit }) {
    // const cardTheme = theme.topics[card.topic.toLowerCase()] || theme.topics.default;
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("Web Design");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            title,
            description,
            topic: category,
            status: "Без статуса",
            date: new Date().toISOString(), 
        };

        if (onSubmit) onSubmit(newTask);
    };

    return (
        <div className="pop-new-card" id="popNewCard">
            <div className="pop-new-card__container">
            <div className="pop-new-card__block">
                <div className="pop-new-card__content">
                <h3 className="pop-new-card__ttl">Создание задачи</h3>
                <a href="#" className="pop-new-card__close" onClick={() => navigate("/")}>&#10006;</a>

                <div className="pop-new-card__wrap">
                    <form className="pop-new-card__form form-new" id="formNewCard" action="#" onSubmit={handleSubmit}>
                    <div className="form-new__block">
                        <label htmlFor="formTitle" className="subttl">Название задачи</label>
                        <input className="form-new__input" type="text" id="formTitle" placeholder="Введите название задачи..." autoFocus
                            value={title} onChange={(e) => setTitle(e.target.value)} required/>
                    </div>
                    <div className="form-new__block">
                        <label htmlFor="textArea" className="subttl">Описание задачи</label>
                        <textarea className="form-new__area" id="textArea" placeholder="Введите описание задачи..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    </form>

                    <Calendar />
                </div>

                <div className="pop-new-card__categories categories">
                    <p className="categories__p subttl">Категория</p>
                    <div className="categories__themes">
                        {["Web Design", "Research", "Copywriting"].map((cat) => {
                        let colorClass = "";
                        if (cat === "Web Design") colorClass = "_orange";
                        if (cat === "Research") colorClass = "_green";
                        if (cat === "Copywriting") colorClass = "_purple";

                        return (
                            <div
                            key={cat}
                            className={`categories__theme ${colorClass} ${category === cat ? "_active-category" : ""}`}
                            onClick={() => setCategory(cat)}
                            >
                            <p className={colorClass}>{cat}</p>
                            </div>
                        );
                        })}
                    </div>
                </div>

                <button className="form-new__create _hover01" id="btnCreate" onClick={handleSubmit}>
                    Создать задачу
                </button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default PopNewCard;

