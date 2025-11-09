import { useContext, useState, useEffect, useCallback } from "react";
import { TaskContext } from "./TaskContext";
import { AuthContext } from "./AuthContext";
import { getTasks, addTask as apiAddTask, updateTask as apiUpdateTask, deleteTask as apiDeleteTask } from "../services/api";

const TaskProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const refreshTasks = useCallback(async () => {
        if (!user?.token) {
            setLoading(false);
            return;
        }
        setLoading(true);
        setError("");
        try {
            const tasksFromAPI = await getTasks(user.token);
            setTasks(tasksFromAPI || []);
        } catch (err) {
            console.error("Ошибка загрузки задач:", err);
            setError("Ошибка загрузки задач");
        } finally {
            setLoading(false);
        }
    }, [user]);

    useEffect(() => {
        if (user?.token) refreshTasks();
    }, [user, refreshTasks]);

    const addTask = async (taskData) => {
        if (!user?.token) return;
        try {
            const tasksFromAPI = await apiAddTask(user.token, taskData);
            setTasks(tasksFromAPI);
        } catch (err) {
            console.error("Ошибка добавления задачи:", err);
            throw err;
        }
    };

    const updateTask = async (id, taskData) => {
        if (!user?.token) return;
        try {
            const tasksFromAPI = await apiUpdateTask(user.token, id, taskData);
            setTasks(tasksFromAPI || []);
        } catch (err) {
            console.error("Ошибка обновления задачи:", err);
            throw err;
        }
    };

    const deleteTask = async (id) => {
        if (!user?.token) return;
        try {
            const tasksFromAPI = await apiDeleteTask(user.token, id);
            setTasks(tasksFromAPI || []);
        } catch (err) {
            console.error("Ошибка удаления задачи:", err);
        }
    };

    return (
        <TaskContext.Provider
            value={{
                tasks,
                loading,
                error,
                refreshTasks,
                addTask,
                updateTask,
                deleteTask,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;


