import Card from '../Card/Card';
import { SMainColumn, SColumnTitle, SCards } from './Column.styled';
import React, { useContext } from "react";
import { TaskContext } from '../../../src/context/TaskContext';

function Column({ status }) {
    const { tasks } = useContext(TaskContext);

    const filteredCards = tasks?.filter(card => card?.status === status) || [];

    return (
        <SMainColumn>
            <SColumnTitle>
                <p>{status}</p>
            </SColumnTitle>
            <SCards>
            {filteredCards.map(card => (
                    <Card
                        key={card._id}
                        id={card._id}
                        topic={card.topic}
                        title={card.title}
                        date={card.date}
                    />
                ))}
            </SCards>
        </SMainColumn>
    )
}

export default Column