import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { useState } from 'react';
import { InputWrap, Label, Input, FormBtn } from './ContactForm.styled';

export const ContactForm = ({ submit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const data = {
      name,
      number,
    };

    submit(data);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputWrap>
        <Label htmlFor={nameInputId}>Name</Label>
        <Input
          type="text"
          name="name"
          id={nameInputId}
          value={name}
          placeholder="Sergiy Petrenko"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </InputWrap>
      <InputWrap>
        <Label htmlFor={numberInputId}>Number</Label>
        <Input
          type="tel"
          name="number"
          id={numberInputId}
          value={number}
          placeholder="123-45-67"
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </InputWrap>

      <FormBtn type="submit" disabled={!name || !number}>
        Add contact
      </FormBtn>
    </form>
  );
};

ContactForm.propTypes = {
  submit: PropTypes.func.isRequired,
};
