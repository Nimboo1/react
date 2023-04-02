import FormCard from '../form-card/FormCard';
import FormPageState from '../../types/FormPageState';
import './form-card-container.scss';

type Cards = {
  cardsArr: FormPageState[];
};

function FormCardContainer(props: Cards) {
  const { cardsArr } = props;
  return (
    <div className="form-card-container">
      {cardsArr.map((card, index) => (
        <FormCard card={card} key={index} />
      ))}
    </div>
  );
}

export default FormCardContainer;
