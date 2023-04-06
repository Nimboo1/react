import Card from '../card/Card';
import CardData from '../../types/CardData';
import './card-container.scss';

type ContainerProps = {
  cards: CardData[] | null;
};

function CardContainer({ cards }: ContainerProps) {
  return (
    <div className="card-container">
      {cards ? (
        cards.map((cardInfo) => <Card cardInfo={cardInfo} key={cardInfo.id} />)
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}

export default CardContainer;
