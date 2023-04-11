import { useEffect, useRef, useState } from 'react';
import Form from '../../components/form/Form';
import FormCard from '../../components/form-card/FormCard';
import CardContainer from '../../components/card-container/CardContainer';
import FormPageState from '../../types/FormPageState';
import './form-page.scss';

function FormPage() {
  const TIMER = 2000;
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const [cards, setCards] = useState<FormPageState[]>([]);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  function handleSubmit(state: FormPageState) {
    setCards((prev) => {
      return [...prev, state];
    });
    setIsSent(true);
    timerRef.current = setTimeout(() => {
      setIsSent(false);
    }, TIMER);
  }

  return (
    <div className="form-page">
      <Form onSubmit={(data) => handleSubmit(data)} />
      <p className={isSent ? 'sent' : 'invisible sent'}>Form sent</p>
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
