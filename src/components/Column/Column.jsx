import Card from '../Card/Card';
import { SMainColumn, SColumnTitle, SCards } from './Column.styled'

function Column({ title, cards }) {
    return (
        <SMainColumn>
            <SColumnTitle>
                <p>{title}</p>
            </SColumnTitle>
            <SCards>
            {cards.length > 0 ? (cards.map((card) => (
                <Card
                    key={card.id}
                    topic={card.topic}
                    title={card.title}
                    date={card.date}
                />
            ))
            ) : (
                <p>Нет задач</p>
            )}
            </SCards>
        </SMainColumn>
    )
}

export default Column