import CardData from '../../types/CardData';
import './card.scss';

type CardProps = {
  cardInfo: CardData;
  clickHandler: (info: CardData) => void;
};

function Card({ cardInfo, clickHandler }: CardProps) {
  return (
    <div
      className="card"
      onClick={() => {
        clickHandler(cardInfo);
      }}
    >
      <img src={cardInfo.image} alt="img" />
      <div className="card__props">
        <p className="card__title">{cardInfo.name}</p>
        <p className="card__prop">Gender: {cardInfo.gender}</p>
      </div>
    </div>
  );
}

export default Card;
