import Card from '../card/Card';
import CardData from '../../types/CardData';
import data from '../../data/data';
import './card-container.scss';

function CardContainer() {
  const cards: CardData[] = data;

  return (
    <div className="card-container">
      {cards.map((cardInfo) => (
        <Card cardInfo={cardInfo} key={cardInfo.id} />
      ))}
    </div>
  );
}

export default CardContainer;
