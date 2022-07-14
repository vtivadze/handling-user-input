import { useState } from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = props => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid, 
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  // email
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // email
  const enteredEmailIsValid = enteredEmail.includes('@');
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  // form
  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // email
  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
  };

  // email
  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  // submit form
  const formSubmitionHandler = event => {
    event.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName, enteredEmail);

    resetNameInput();

    setEnteredEmail('');
    setEnteredEmailTouched(false);
  };

  // name class
  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  // email class
  const emailInputClasses = emailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmitionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
      </div>
      {nameInputHasError  && (
        <p className='error-text'>Name must not be empty.</p>
      )}

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-mail</label>
        <input
          type='email'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
      </div>
      {emailInputIsInvalid && (
        <p className='error-text'>Please enter a valid e-amil.</p>
      )}

      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
