import React, { ReactElement } from 'react';
import Card from '../card/Card';
import CardData from '../../types/CardData';
import data from '../../data/data';
import './card-container.scss';

class CardContainer extends React.Component {
  data: CardData[] = data;

  render() {
    const cardList: ReactElement[] = this.data.map((cardInfo) => (
      <Card cardInfo={cardInfo} key={cardInfo.id} />
    ));
    return <div className="card-container">{cardList}</div>;
  }
}

export default CardContainer;
