/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FormEvent } from 'react';
import FormPageState from '../../types/FormPageState';
import './form.scss';

type FormProps = {
  onSubmit: (state: FormPageState) => void;
};

class Form extends React.Component<FormProps, Record<string, never>> {
  private nameInput;

  private dateInput;

  private select;

  private checkbox;

  private freeInput;

  private paidInput;

  private fileInput;

  private form;

  constructor(props: FormProps) {
    super(props);

    this.nameInput = React.createRef() as React.RefObject<HTMLInputElement>;
    this.dateInput = React.createRef() as React.RefObject<HTMLInputElement>;
    this.select = React.createRef() as React.RefObject<HTMLSelectElement>;
    this.checkbox = React.createRef() as React.RefObject<HTMLInputElement>;
    this.freeInput = React.createRef() as React.RefObject<HTMLInputElement>;
    this.paidInput = React.createRef() as React.RefObject<HTMLInputElement>;
    this.fileInput = React.createRef() as React.RefObject<HTMLInputElement>;
    this.form = React.createRef() as React.RefObject<HTMLFormElement>;
  }

  private handleSubmit(event: FormEvent): void {
    event.preventDefault();

    const { onSubmit } = this.props;

    const name = this.nameInput.current as HTMLInputElement;
    const date = this.dateInput.current as HTMLInputElement;
    const select = this.select.current as HTMLSelectElement;
    const checkboxInput = this.checkbox.current as HTMLInputElement;
    const freeInput = this.freeInput.current as HTMLInputElement;
    const paidInput = this.paidInput.current as HTMLInputElement;
    const fileInput = this.fileInput.current as HTMLInputElement;
    const form = this.form.current as HTMLFormElement;

    if (fileInput.files) {
      onSubmit({
        name: name.value,
        date: date.value,
        select: select.value,
        checkbox: checkboxInput.checked,
        paid: freeInput.checked ? freeInput.value : paidInput.value,
        file: fileInput.files[0],
      });
    }

    form.reset();
  }

  render() {
    return (
      <form className="form" ref={this.form} onSubmit={(e) => this.handleSubmit(e)}>
        <label className="label">
          <input
            type="text"
            placeholder="Name"
            pattern="[a-zA-Z]+"
            required
            ref={this.nameInput}
            className="input"
          />
          <span className="incorrect">Name incorrect</span>
        </label>
        <label className="label">
          <input
            type="date"
            required
            ref={this.dateInput}
            min="1920-01-01"
            max="2023-01-01"
            className="input"
          />
          <span className="incorrect">Date incorrect</span>
        </label>
        <select defaultValue="male" ref={this.select}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label className="label">
          <input className="checkbox" type="checkbox" ref={this.checkbox} required />
          Do you agree to the terms of use?
        </label>
        <label className="label">
          Free
          <input type="radio" name="pay" value="free" defaultChecked ref={this.freeInput} />
        </label>
        <label className="label">
          Paid
          <input type="radio" name="pay" value="paid" ref={this.paidInput} />
        </label>
        <label className="label">
          <input
            type="file"
            className="file"
            accept=".jpeg,.jpg,.png"
            ref={this.fileInput}
            required
          />
        </label>
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
