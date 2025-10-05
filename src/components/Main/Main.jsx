import Column from '../Column/Column'
import {cardList} from "../../data"

function Main() {
    const statuses = [
        "Без статуса",
        "Нужно сделать",
        "В работе",
        "Тестирование",
        "Готово",
    ];

    return (
        <main className="main">
        <div className="container">
            <div className="main__block">
                <div className="main__content">
                    {statuses.map((status) => {
                        const cardsByStatus = cardList.filter(
                        (card) => card.status === status
                    );
                    return <Column key={status} title={status} cards={cardsByStatus} />;
                })}
                </div>
            </div>
        </div>
        </main>
    )
}

export default Main