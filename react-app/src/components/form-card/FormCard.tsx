import FormCardData from '../../types/FormCardData';
import './form-card.scss';

type CardInfo = {
  card: FormCardData;
};

function FormCard(props: CardInfo) {
  const { card } = props;
  return (
    <div className="form-card">
      <img src={card.file ? card.file : ''} alt="img" />
      <div className="form-card__props">
        <p className="form-card__title">{card.name}</p>
        <p>{card.date}</p>
        <p>Gender: {card.select}</p>
        <p>Access: {card.paid}</p>
      </div>
    </div>
  );
}

export default FormCard;
