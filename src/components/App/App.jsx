import { useEffect, useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';
import contactsData from '../../contacts.json';
import { nanoid } from 'nanoid';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(stringifiedContacts) ?? contactsData;

    return parsedContacts;
  });

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringifiedContacts);
  }, [contacts]);

  const [filterValue, setFilterValue] = useState('');

  const filterContacts = contacts.filter(contact =>
    contact.name
      .toLocaleLowerCase()
      .includes(filterValue.toLocaleLowerCase().trim())
  );

  function onAddContact(formData) {
    const finalContact = {
      id: nanoid(),
      ...formData,
    };

    setContacts([...contacts, finalContact]);
  }

  function onDeleteContact(contactId) {
    const updatedContacts = contacts.filter(
      contact => contact.id !== contactId
    );

    setContacts(updatedContacts);
  }

  function handleChange(event) {
    setFilterValue(event.target.value);
  }

  return (
    <div className="phonebookContainer">
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />

      <SearchBox filterValue={filterValue} handleChange={handleChange} />

      <ContactList
        contacts={filterContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}
