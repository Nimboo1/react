import { useEffect, useRef, useState } from 'react';
import Form from '../../components/form/Form';
import FormCard from '../../components/form-card/FormCard';
import CardContainer from '../../components/card-container/CardContainer';
import FormCardData from '../../types/FormCardData';
import './form-page.scss';
import { useAppSelector } from '../../hooks/redux';

function FormPage() {
  // const [cards, setCards] = useState<FormCardData[]>([]);
  // const [isSent, setIsSent] = useState(false);

  // function handleSubmit(state: FormCardData) {
  //   setCards((prev) => {
  //     return [...prev, state];
  //   });
  //   setIsSent(true);
  //   timerRef.current = setTimeout(() => {
  //     setIsSent(false);
  //   }, TIMER);
  // }

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
