import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Wrap } from './Wrap/Wrap';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { TitleH1, TitleH2 } from './Wrap/Wrap.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = data => {
    console.log(data);
    const dataIncludes = this.state.contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (dataIncludes) {
      return alert(`${data.name} is already in contacts`);
    }

    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalaizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalaizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <>
        <Wrap>
          <TitleH1>Phonebook</TitleH1>
          <ContactForm submit={this.addContact} />
          <TitleH2>Contacts</TitleH2>
          <Filter value={filter} onChange={this.changeFilter} />
          <Contacts
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        </Wrap>
      </>
    );
  }
}
