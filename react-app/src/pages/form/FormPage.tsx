/* eslint-disable react/no-unused-state */
import React from 'react';
import Form from '../../components/form/Form';
import FormPageState from '../../types/FormPageState';
import './form-page.scss';

type PageState = {
  form: FormPageState;
  isSent: boolean;
};

class FormPage extends React.Component<Record<string, never>, PageState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      form: {
        name: '',
        date: '',
        select: '',
        checkbox: false,
        paid: '',
        file: null,
      },
      isSent: false,
    };
  }

  handleSubmit(state: FormPageState) {
    this.setState({
      form: state,
      isSent: true,
    });

    setTimeout(() => this.setState({ isSent: false }), 2000);
  }

  render() {
    const { isSent } = this.state;
    return (
      <div>
        <Form onSubmit={(data) => this.handleSubmit(data)} />
        <p className={isSent ? '' : 'invisible'}>Form sent</p>
      </div>
    );
  }
}

export default FormPage;
