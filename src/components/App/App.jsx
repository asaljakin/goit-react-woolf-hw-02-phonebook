import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm, ContactList, Filter } from 'components';
import styles from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const isExist = this.state.contacts.some(({ name }) => {
      return name.toUpperCase() === e.target.name.value.toUpperCase();
    });

    if (isExist) {
      alert(`${e.target.name.value} is already in contacts.`);
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { id: nanoid(), name: this.state.name, number: this.state.number },
        ],
        filter: '',
        name: '',
        number: '',
      };
    });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getContacts = () => {
    return this.state.contacts.filter(({ name }) => {
      const upName = name.toUpperCase();
      return upName.includes(this.state.filter.toUpperCase());
    });
  };

  handleDelete = e => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(el => {
          return el.id !== e.target.name;
        }),
      };
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <h1>Phonebook</h1>
          <ContactForm
            name={this.state.name}
            number={this.state.number}
            handleChange={this.handleChange}
          />
        </form>
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} handleChange={this.handleChange} />
        <ContactList
          contacts={this.getContacts()}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
