import React from 'react';
import CardData from '../../types/CardData';
import './card.scss';

class Card extends React.Component<{ cardInfo: CardData }, Record<string, never>> {
  constructor(props: { cardInfo: CardData }) {
    super(props);
    this.state = {};
  }

  render() {
    const { cardInfo } = this.props;
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
}

export default Card;
