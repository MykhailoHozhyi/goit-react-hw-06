import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import style from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filterContacts = contacts.filter(contact => {
    const filteredContacts = contact.name
      .toLocaleLowerCase()
      .includes(filter.toLocaleLowerCase().trim());

    return filteredContacts;
  });

  return (
    <ul className={style.contactList}>
      {filterContacts.map(contact => (
        <li className={style.contactItem} key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
}
