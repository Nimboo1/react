import React from 'react';
import FormPageState from '../../types/FormPageState';
import './form-card.scss';

type CardInfo = {
  card: FormPageState;
};

class FormCard extends React.Component<CardInfo, Record<string, never>> {
  constructor(props: CardInfo) {
    super(props);
    this.state = {};
  }

  render() {
    const { card } = this.props;
    return (
      <div className="form-card">
        <img src={card.file ? window.URL.createObjectURL(card.file) : ''} alt="img" />
        <div className="card__props">
          <p className="card__title">{card.name}</p>
          <p className="card__prop">{card.date}</p>
          <p className="card__prop">Gender: {card.select}</p>
          <p className="card__prop">Access: {card.paid}</p>
        </div>
      </div>
    );
  }
}

export default FormCard;
