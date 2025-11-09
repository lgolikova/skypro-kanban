import { useContext, useState, useEffect, useCallback } from "react";
import { TaskContext } from "./TaskContext";
import { AuthContext } from "./AuthContext";
import {
    getTasks,
    addTask as apiAddTask,
    updateTask as apiUpdateTask,
    deleteTask as apiDeleteTask,
} from "../services/api";

const TaskProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const refreshTasks = useCallback(async () => {
        if (!user?.token) return;
        setLoading(true);
        try {
            const fetched = await getTasks(user.token);
            setTasks(fetched || []);
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
            const updatedTasks = await apiAddTask(user.token, taskData);
            setTasks(updatedTasks);
        } catch (err) {
            console.error("Ошибка добавления задачи:", err);
            throw err;
        }
    };

    const updateTask = async (id, taskData) => {
        if (!user?.token) return;
        try {
            const response = await apiUpdateTask(user.token, id, taskData);
            const updatedList = response?.tasks || response || [];
            setTasks(updatedList);
        } catch (err) {
            console.error("Ошибка обновления задачи:", err);
            throw err;
        }
    };

    const deleteTask = async (id) => {
        if (!user?.token) return;
        try {
            const response = await apiDeleteTask(user.token, id);
            const updatedList = response?.tasks || response || [];
            setTasks(updatedList);
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

