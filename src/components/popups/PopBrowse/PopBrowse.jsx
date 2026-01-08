import React, { useState, useEffect, useContext } from "react";
import Calendar from "../../Calendar/Calendar";
import { useNavigate } from "react-router-dom";
import { theme } from "../../theme";
import { TaskContext } from "../../../context/TaskContext";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/AuthContext";

function PopBrowse({ cardId }) {
    const { user } = useContext(AuthContext);

    const { tasks, updateTask, deleteTask, loading } = useContext(TaskContext);

    const [card, setCard] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [topic, setTopic] = useState("");
    const [status, setStatus] = useState("");
    const [date, setDate] = useState(new Date());

    const navigate = useNavigate();

    const topics = ["Web Design", "Research", "Copywriting"];
    const STATUSES = [
        "Без статуса",
        "Нужно сделать",
        "В работе",
        "Тестирование",
        "Готово",
    ];

    useEffect(() => {
        const task = tasks.find((t) => t._id === cardId);
        if (task) {
            setCard(task);
            setTitle(task.title);
            setDescription(task.description);
            setTopic(task.topic);
            setStatus(task.status || "Без статуса");
            setDate(task.date ? new Date(task.date) : new Date());
        }
    }, [tasks, cardId]);

    const handleSave = async () => {
        await updateTask(cardId, {
            title,
            description,
            topic,
            status,
            date: date.toISOString(),
        });
        setIsEditing(false);
        toast.success("Задача обновлена!");
    };

    // const handleDelete = async () => {
    //     if (window.confirm("Вы уверены, что хотите удалить задачу?")) {
    //         await deleteTask(cardId);
    //         toast.success("Задача удалена");
    //         navigate("/");
    //     }
    // };
    const handleDelete = async () => {
        const ToastDelete = ({ closeToast }) => (
            <div>
                <p>Вы уверены, что хотите удалить задачу?</p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: "10px",
                        marginTop: "5px",
                    }}
                >
                    <button
                        onClick={async () => {
                            try {
                                // НЕ передаем user.token, берется из TaskContext
                                await deleteTask(cardId);
                                toast.success("Задача удалена");
                                navigate("/");
                            } catch (err) {
                                toast.error("Не удалось удалить задачу");
                                console.error(err);
                            }
                            closeToast();
                        }}
                        style={{
                            background: "red",
                            color: "#fff",
                            border: "none",
                            padding: "3px 8px",
                            borderRadius: "3px",
                        }}
                    >
                        Да
                    </button>
                    <button
                        onClick={closeToast}
                        style={{
                            background: "#ccc",
                            color: "#000",
                            border: "none",
                            padding: "3px 8px",
                            borderRadius: "3px",
                        }}
                    >
                        Отмена
                    </button>
                </div>
            </div>
        );

        toast.info(<ToastDelete />, {
            autoClose: false,
            closeOnClick: false,
            closeButton: false,
        });
    };

    if (loading)
        return (
            <div className="pop-browse">
                <div className="pop-browse__container">
                    <div className="pop-browse__block">
                        <p>Данные загружаются...</p>
                    </div>
                </div>
            </div>
        );

    if (!card)
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

    const cardTheme = theme.topics[topic.toLowerCase()] || theme.topics.default;

    return (
        <div className="pop-browse" id="popBrowse">
            <div className="pop-browse__container">
                <div className="pop-browse__block">
                    <div className="pop-browse__content">
                        {/* Заголовок и тема */}
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

                        {/* Статус */}
                        <div className="pop-browse__status status">
                            <p className="status__p subttl">Статус</p>
                            <div className="status__themes">
                                {isEditing ? (
                                    STATUSES.map((s) => (
                                        <div
                                            key={s}
                                            className="status__theme"
                                            onClick={() => setStatus(s)}
                                            style={
                                                s === status
                                                    ? {
                                                          backgroundColor:
                                                              "#94A6BE",
                                                          color: "#fff",
                                                      }
                                                    : {}
                                            }
                                        >
                                            <p>{s}</p>
                                        </div>
                                    ))
                                ) : (
                                    <div
                                        className="status__theme"
                                        style={{
                                            backgroundColor: "#94A6BE",
                                            color: "#fff",
                                        }}
                                    >
                                        <p>{card.status}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Описание и календарь */}
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
                                onChange={isEditing ? setDate : undefined}
                                disabled={!isEditing}
                            />
                        </div>

                        {/* Кнопки */}
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
                                                setStatus(card.status);
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
