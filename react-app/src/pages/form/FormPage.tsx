/* eslint-disable react/no-unused-state */
import React from 'react';
import Form from '../../components/form/Form';
import FormCardContainer from '../../components/form-card-container/FormCardContainer';
import FormPageState from '../../types/FormPageState';
import './form-page.scss';

type PageState = {
  isSent: boolean;
  cards: FormPageState[];
};

class FormPage extends React.Component<Record<string, never>, PageState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      cards: [],
      isSent: false,
    };
  }

  private handleSubmit(state: FormPageState) {
    this.setState((prev) => ({
      cards: [...prev.cards, state],
      isSent: true,
    }));

    setTimeout(() => this.setState({ isSent: false }), 2000);
  }

  render() {
    const { cards, isSent } = this.state;
    return (
      <div className="form-page">
        <Form onSubmit={(data) => this.handleSubmit(data)} />
        <p className={isSent ? 'sent' : 'invisible sent'}>Form sent</p>
        <FormCardContainer cardsArr={cards} />
      </div>
    );
  }
}

export default FormPage;
