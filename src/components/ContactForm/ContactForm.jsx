import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { Component } from 'react';
import { InputWrap, Label, Input, FormBtn } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.submit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <InputWrap>
          <Label htmlFor={this.nameInputId}>Name</Label>
          <Input
            type="text"
            name="name"
            id={this.nameInputId}
            value={this.state.name}
            placeholder="Sergiy Petrenko"
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </InputWrap>
        <InputWrap>
          <Label htmlFor={this.numberInputId}>Number</Label>
          <Input
            type="tel"
            name="number"
            id={this.numberInputId}
            value={this.state.number}
            placeholder="123-45-67"
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </InputWrap>

        <FormBtn
          type="submit"
          disabled={!this.state.name || !this.state.number}
        >
          Add contact
        </FormBtn>
      </form>
    );
  }
}

ContactForm.propTypes = {
  submit: PropTypes.func.isRequired,
};
