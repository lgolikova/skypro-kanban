import Card from '../Card/Card'

function Column({ title, cards }) {
    return (
        <div className="main__column column">
        <div className="column__title">
            <p>{title}</p>
        </div>
        <div className="cards">
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
        </div>
        </div>
    )
}

export default Column