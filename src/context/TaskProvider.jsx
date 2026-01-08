import { useState, useEffect, useContext, useCallback } from "react";
import { TaskContext } from "./TaskContext";
import { AuthContext } from "./AuthContext";
import {
    getTasks,
    addTask as apiAddTask,
    updateTask as apiUpdateTask,
} from "../services/api";

const TaskProvider = ({ children }) => {
    const { user, loading: authLoading } = useContext(AuthContext);

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (authLoading) return;

        if (!user || !user.token) {
            setTasks([]);
            setLoading(false);
            return;
        }

        const fetchTasks = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getTasks(user.token);
                setTasks(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, [user, authLoading]);

    const addTask = useCallback(
        async (taskData) => {
            if (!user || !user.token)
                throw new Error("Пользователь не авторизован");
            const newTasks = await apiAddTask(user.token, taskData);
            setTasks(newTasks);
        },
        [user]
    );

    const updateTask = useCallback(
        async (taskId, updatedFields) => {
            if (!user || !user.token)
                throw new Error("Пользователь не авторизован");
            const newTasks = await apiUpdateTask(
                user.token,
                taskId,
                updatedFields
            );
            setTasks(newTasks);
        },
        [user]
    );

    return (
        <TaskContext.Provider
            value={{ tasks, loading, error, addTask, updateTask }}
        >
            {children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;
