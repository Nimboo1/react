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
        <div className="form-card__props">
          <p className="form-card__title">{card.name}</p>
          <p>{card.date}</p>
          <p>Gender: {card.select}</p>
          <p>Access: {card.paid}</p>
        </div>
      </div>
    );
  }
}

export default FormCard;
