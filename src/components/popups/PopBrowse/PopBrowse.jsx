import React, { useContext, useEffect, useState } from "react";
import Calendar from "../../Calendar/Calendar";
import { useNavigate } from "react-router-dom";
import { theme } from "../../theme";
import { TaskContext } from "../../../context/TaskContext";

function PopBrowse({ cardId }) {
    const { tasks, updateTask, deleteTask, loading } = useContext(TaskContext);

    const [card, setCard] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [topic, setTopic] = useState("");
    const [date, setDate] = useState(new Date());

    const navigate = useNavigate();

    const topics = ["Web Design", "Research", "Copywriting"];

    useEffect(() => {
        const task = tasks.find((t) => t._id === cardId);
        if (task) {
            setCard(task);
            setTitle(task.title);
            setDescription(task.description);
            setTopic(task.topic);
            setDate(task.date ? new Date(task.date) : new Date());
        }
    }, [tasks, cardId]);

    const handleSave = async () => {
        await updateTask(cardId, {
            title,
            description,
            topic,
            date: date.toISOString(),
        });
        setIsEditing(false);
        alert("Задача обновлена!");
    };

    const handleDelete = async () => {
        if (window.confirm("Вы уверены, что хотите удалить задачу?")) {
            await deleteTask(cardId);
            navigate("/");
        }
    };

    if (loading) {
        return (
            <div className="pop-browse">
                <div className="pop-browse__container">
                    <div className="pop-browse__block">
                        <p>Данные загружаются...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (!card) return null;

    const cardTheme = theme.topics[topic.toLowerCase()] || theme.topics.default;

    return (
        <div className="pop-browse" id="popBrowse">
            <div className="pop-browse__container">
                <div className="pop-browse__block">
                    <div className="pop-browse__content">
                        <div className="pop-browse__top-block">
                            {isEditing ? (
                                <input
                                    className="pop-browse__input-title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            ) : (
                                <h3 className="pop-browse__ttl">
                                    {card.title}
                                </h3>
                            )}

                            <div
                                className="categories__theme theme-top _active-category"
                                style={{
                                    backgroundColor: cardTheme.background,
                                    color: cardTheme.color,
                                }}
                            >
                                {isEditing ? (
                                    <select
                                        value={topic}
                                        onChange={(e) =>
                                            setTopic(e.target.value)
                                        }
                                    >
                                        {topics.map((t) => (
                                            <option key={t} value={t}>
                                                {t}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <p>{card.topic}</p>
                                )}
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
                            {isEditing ? (
                                <textarea
                                    className="pop-browse__textarea form-browse__area form-browse__area_white"
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                />
                            ) : (
                                <textarea
                                    className="pop-browse__textarea form-browse__area"
                                    readOnly
                                    value={card.description || ""}
                                />
                            )}

                            <Calendar
                                value={date}
                                onChange={setDate}
                                disabled={!isEditing}
                            />
                        </div>

                        <div className="pop-browse__btn-browse">
                            <div className="btn-group">
                                {isEditing ? (
                                    <>
                                        <button
                                            className="_btn-save _btn-bg _hover01"
                                            onClick={handleSave}
                                        >
                                            Сохранить
                                        </button>
                                        <button
                                            className="_btn-cancel _btn-bor _hover03"
                                            onClick={() => {
                                                setTitle(card.title);
                                                setDescription(
                                                    card.description
                                                );
                                                setTopic(card.topic);
                                                setDate(
                                                    card.date
                                                        ? new Date(card.date)
                                                        : new Date()
                                                );
                                                setIsEditing(false);
                                            }}
                                        >
                                            Отменить
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        className="_btn-edit btn-browse__edit _btn-bor _hover03"
                                        onClick={() => setIsEditing(true)}
                                    >
                                        Редактировать задачу
                                    </button>
                                )}
                                <button
                                    className="_btn-delete btn-browse__delete _btn-bor _hover03"
                                    onClick={handleDelete}
                                >
                                    Удалить задачу
                                </button>
                            </div>
                            <button
                                className="_btn-close btn-browse__close _btn-bg _hover01"
                                onClick={() => navigate("/")}
                            >
                                Закрыть
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopBrowse;
