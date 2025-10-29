import React from "react";
import Calendar from "../../Calendar/Calendar";
import { useNavigate } from "react-router-dom";
import { theme } from '../../theme';
import { useState, useEffect } from "react";
import { deleteTask, updateTask, getTaskById } from "../../../../src/services/api";


function PopBrowse({ cardId }) {
    const [card, setCard] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [topic, setTopic] = useState("");

    const navigate = useNavigate();
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const token = userInfo?.token;

    const topics = ["Web Design", "Research", "Copywriting"];

    useEffect(() => {
        const loadTask = async () => {
            if (!token) {
                setError("Вы не авторизованы");
                setIsLoading(false);
                return;
            }

            try {
                const response = await getTaskById(token, cardId);
                const taskData = response.task;
                setCard(taskData);
                setTitle(taskData.title);
                setDescription(taskData.description);
                setTopic(taskData.topic);
            } catch (err) {
                setError(err.message || "Ошибка загрузки задачи");
            } finally {
                setIsLoading(false);
            }
        };
        loadTask();
    }, [cardId, token]);

    const handleDelete = async () => {
        if (!token) return alert("Вы не авторизованы");

        if (window.confirm("Вы уверены, что хотите удалить задачу?")) {
            try {
                await deleteTask(token, cardId);
                alert("Задача удалена");
                navigate("/");
            } catch (err) {
                alert("Ошибка при удалении задачи: " + err.message);
            }
        }
    };

    const handleSave = async () => {
        if (!token) return alert("Вы не авторизованы");

        try {
            const updatedTask = {
                title,
                description,
                topic,
                status: card.status,
                date: card.date,
            };
            await updateTask(token, cardId, updatedTask);
            setCard({ ...card, ...updatedTask });
            setIsEditing(false);
            alert("Задача обновлена!");
        } catch (err) {
            alert("Ошибка при обновлении: " + err.message);
        }
    };

    if (isLoading) return (
        <div className="pop-browse">
            <div className="pop-browse__container">
                <div className="pop-browse__block">
                    <p>Данные загружаются...</p>
                </div>
            </div>
        </div>
    );

    if (error || !card) return (
        <div className="pop-browse">
            <div className="pop-browse__container">
                <div className="pop-browse__block">
                    <p>Карточка не найдена</p>
                    <button onClick={() => navigate("/")}>Закрыть</button>
                </div>
            </div>
        </div>
    );

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
                                <h3 className="pop-browse__ttl">{card.title}</h3>
                            )}

                            <div
                                className="categories__theme theme-top _active-category"
                                style={{
                                    backgroundColor: cardTheme.background,
                                    color: cardTheme.color
                                }}
                            >
                                {isEditing ? (
                                    <select
                                        value={topic}
                                        onChange={(e) => setTopic(e.target.value)}
                                    >
                                        {topics.map(t => (
                                            <option key={t} value={t}>{t}</option>
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
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            ) : (
                                <textarea
                                    className="pop-browse__textarea form-browse__area"
                                    readOnly
                                    value={card.description || ""}
                                />
                            )}
                            <Calendar />
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
                                            setDescription(card.description);
                                            setTopic(card.topic);
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
                                <button className="_btn-delete btn-browse__delete _btn-bor _hover03" onClick={handleDelete}>Удалить задачу</button>
                            </div>
                            <button className="_btn-close btn-browse__close _btn-bg _hover01" onClick={() => navigate("/")}>Закрыть</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopBrowse;
