import axios from "axios";
// const token = "ksdfsksdfjfsdjk";

const API_URL = "https://wedev-api.sky.pro/api/kanban";

export async function getTasks(token) {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.tasks;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function addTask(token, taskData) {
    console.log("Token:", token);
    try {
        const response = await axios.post(API_URL, taskData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "", //?????????
            },
        });
        return response.data.tasks;
    } catch (error) {
        throw new Error(error.message);
    }
}
