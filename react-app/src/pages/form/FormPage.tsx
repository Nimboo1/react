import Form from '../../components/form/Form';
import FormCard from '../../components/form-card/FormCard';
import CardContainer from '../../components/card-container/CardContainer';
import './form-page.scss';
import { useAppSelector } from '../../hooks/redux';

function FormPage() {
  const { cards, isCardSent } = useAppSelector((state) => state.formCardReducer);
  return (
    <div className="form-page">
      <Form />
      <p className={isCardSent ? 'sent' : 'invisible sent'}>Form sent</p>
      {cards.length > 0 && (
        <CardContainer>
          {cards.map((card, index) => (
            <FormCard card={card} key={index} />
          ))}
        </CardContainer>
      )}
    </div>
  );
}

export default FormPage;
