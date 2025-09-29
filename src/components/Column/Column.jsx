import Card from '../Card/Card'

function Column({ title }) {
    return (
        <div className="main__column column">
        <div className="column__title">
            <p>{title}</p>
        </div>
        <div className="cards">
            <Card theme="_orange" category="Web Design" date="30.10.23" />
            <Card theme="_green" category="Research" date="30.10.23" />
            <Card theme="_purple" category="Copywriting" date="30.10.23" />
        </div>
        </div>
    )
}

export default Column