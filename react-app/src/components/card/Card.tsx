import CardData from '../../types/CardData';
import './card.scss';

type CardProps = {
  cardInfo: CardData;
};

function Card(props: CardProps) {
  const { cardInfo } = props;

  return (
    <div className="card">
      <img src={cardInfo.thumbnail} alt="img" />
      <div className="card__props">
        <p className="card__title">{cardInfo.title}</p>
        <p className="card__prop">Категория: {cardInfo.category}</p>
        <p className="card__prop">В наличии: {cardInfo.stock}</p>
        <p className="card__prop">Базовая машина: {cardInfo.baseVehicle}</p>
      </div>
      <p className="card__price">{cardInfo.price} руб.</p>
    </div>
  );
}

export default Card;
