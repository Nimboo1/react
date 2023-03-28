import React from 'react';
import FormCard from '../form-card/FormCard';
import FormPageState from '../../types/FormPageState';
import './form-card-container.scss';

type Cards = {
  cardsArr: FormPageState[];
};

class FormCardContainer extends React.Component<Cards, Record<string, never>> {
  constructor(props: Cards) {
    super(props);
    this.state = {};
  }

  render() {
    const { cardsArr } = this.props;
    return (
      <div className="form-card-container">
        {cardsArr.map((card) => (
          <FormCard card={card} key={new Date().getTime() + card.name} />
        ))}
      </div>
    );
  }
}

export default FormCardContainer;
