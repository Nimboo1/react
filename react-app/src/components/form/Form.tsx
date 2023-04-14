/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './form.scss';
import { formCardSlice } from '../../store/reducers/FormCardSlice';
import { useAppDispatch } from '../../hooks/redux';

type Inputs = {
  name: string;
  date: string;
  select: string;
  checkbox: boolean;
  paid: string;
  file: FileList;
};

function Form() {
  const TIMER = 2000;
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const { addFormCard, toggleCardSent } = formCardSlice.actions;
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>();

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  useEffect(() => {
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  const handleSubmitForm: SubmitHandler<Inputs> = (data) => {
    const { name, date, select, checkbox, paid, file } = data;

    dispatch(toggleCardSent(true));
    timerRef.current = setTimeout(() => {
      dispatch(toggleCardSent(false));
    }, TIMER);

    dispatch(
      addFormCard({
        name,
        date,
        select,
        checkbox,
        paid,
        file: URL.createObjectURL(file.item(0) as File),
      })
    );
  };

  return (
    <form className="form" onSubmit={handleSubmit(handleSubmitForm)}>
      <label className="label">
        <input
          type="text"
          placeholder="Name"
          className="input"
          {...register('name', { required: true, pattern: /^[A-Za-z]+$/i })}
        />
        {errors.name && <span className="incorrect">Name incorrect</span>}
      </label>
      <label className="label">
        <input
          type="date"
          className="input"
          {...register('date', { required: true, min: '1920-01-01', max: '2023-12-12' })}
        />
        {errors.date && <span className="incorrect">Date incorrect</span>}
      </label>
      <select defaultValue="male" {...register('select')}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <label className="label">
        <input className="checkbox" type="checkbox" {...register('checkbox', { required: true })} />
        Do you agree to the terms of use?
        <br />
        {errors.checkbox && <span className="incorrect">This field is required</span>}
      </label>
      <label className="label">
        Free
        <input type="radio" value="free" defaultChecked {...register('paid')} />
      </label>
      <label className="label">
        Paid
        <input type="radio" value="paid" {...register('paid')} />
      </label>
      <label className="label">
        <input
          type="file"
          className="file"
          accept=".jpeg,.jpg,.png"
          {...register('file', { required: true })}
        />
        {errors.date && <span className="incorrect">File incorrect</span>}
      </label>
      <button type="submit" className="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
