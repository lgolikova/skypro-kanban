import React, { useState, useContext } from "react";
import Calendar from "../../Calendar/Calendar";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../../../context/TaskContext";
import { toast } from "react-toastify";

function PopNewCard() {
    const navigate = useNavigate();
    const { addTask } = useContext(TaskContext);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("Web Design");
    const [date, setDate] = useState(new Date());

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newTask = {
            title: title.trim() || "Новая задача",
            description: description || "",
            topic: category,
            status: "Без статуса",
            date: date.toISOString(),
        };

        try {
            await addTask(newTask);
            toast.success("Задача успешно создана!");
            navigate("/");
        } catch (err) {
            console.error(err);
            toast.error("Не удалось создать задачу");
        }
    };

    return (
        <div className="pop-new-card" id="popNewCard">
            <div className="pop-new-card__container">
                <div className="pop-new-card__block">
                    <div className="pop-new-card__content">
                        <h3 className="pop-new-card__ttl">Создание задачи</h3>

                        <a
                            href="#"
                            className="pop-new-card__close"
                            onClick={(e) => {
                                e.preventDefault();
                                navigate("/");
                            }}
                        >
                            &#10006;
                        </a>

                        <div className="pop-new-card__wrap">
                            <form
                                className="pop-new-card__form form-new"
                                id="formNewCard"
                                onSubmit={handleSubmit}
                            >
                                <div className="form-new__block">
                                    <label
                                        htmlFor="formTitle"
                                        className="subttl"
                                    >
                                        Название задачи
                                    </label>
                                    <input
                                        className="form-new__input"
                                        type="text"
                                        id="formTitle"
                                        placeholder="Введите название задачи..."
                                        autoFocus
                                        value={title}
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                        required
                                    />
                                </div>

                                <div className="form-new__block">
                                    <label
                                        htmlFor="textArea"
                                        className="subttl"
                                    >
                                        Описание задачи
                                    </label>
                                    <textarea
                                        className="form-new__area"
                                        id="textArea"
                                        placeholder="Введите описание задачи..."
                                        value={description}
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
                                    />
                                </div>
                            </form>

                            <div className="pop-new-card__calendar">
                                <Calendar value={date} onChange={setDate} />
                            </div>
                        </div>

                        <div className="pop-new-card__categories categories">
                            <p className="categories__p subttl">Категория</p>

                            <div className="categories__themes">
                                {[
                                    { name: "Web Design", color: "_orange" },
                                    { name: "Research", color: "_green" },
                                    { name: "Copywriting", color: "_purple" },
                                ].map(({ name, color }) => (
                                    <div
                                        key={name}
                                        className={`categories__theme ${color} ${
                                            category === name
                                                ? "_active-category"
                                                : ""
                                        }`}
                                        onClick={() => setCategory(name)}
                                    >
                                        <p className={color}>{name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            className="form-new__create _hover01"
                            form="formNewCard"
                            type="submit"
                        >
                            Создать задачу
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopNewCard;
