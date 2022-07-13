import { useState } from 'react';

const SimpleInput = props => {
  // name
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // email
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // name
  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // email
  const enteredEmailIsValid = enteredEmail.includes('@');
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  // form
  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // name
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  // email
  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
  }

  // name
  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  // email
  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);
  };

  // submit form
  const formSubmitionHandler = event => {
    event.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName, enteredEmail);

    setEnteredName('');
    setEnteredNameTouched(false);

    setEnteredEmail('');
    setEnteredEmailTouched(false);
  };

  // name class
  const nameInputClasses = nameInputIsInvalid
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
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
      </div>
      {nameInputIsInvalid && (
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
