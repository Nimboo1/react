import CardData from '../../types/CardData';
import './card.scss';

type CardProps = {
  cardInfo: CardData;
};

function Card(props: CardProps) {
  const { cardInfo } = props;

  return (
    <div className="card">
      <img src={cardInfo.image} alt="img" />
      <div className="card__props">
        <p className="card__title">{cardInfo.name}</p>
        <p className="card__prop">Gender: {cardInfo.gender}</p>
      </div>
    </div>
  );
}

export default Card;
