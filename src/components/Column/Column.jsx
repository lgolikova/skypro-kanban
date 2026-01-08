import React, { useContext } from "react";
import { SMainColumn, SColumnTitle, SCards } from "./Column.styled";
import { TaskContext } from "../../context/TaskContext";
import Card from "../Card/Card";

function Column({ status }) {
    const { tasks, updateTask } = useContext(TaskContext);

    const filteredTasks = tasks.filter((task) => task.status === status) || [];

    return (
        <SMainColumn>
            <SColumnTitle>
                <p>{status}</p>
            </SColumnTitle>
            <SCards>
                {filteredTasks.map((task) => (
                    <Card
                        key={task._id}
                        id={task._id}
                        title={task.title}
                        topic={task.topic}
                        date={task.date ? new Date(task.date) : null}
                        onDateChange={(newDate) =>
                            updateTask(task._id, {
                                date: newDate.toISOString(),
                            })
                        }
                    />
                ))}
            </SCards>
        </SMainColumn>
    );
}

export default Column;
