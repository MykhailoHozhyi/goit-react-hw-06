import Contact from '../Contact/Contact';
import style from './ContactList.module.css';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={style.contactList}>
      {contacts.map(contact => (
        <li className={style.contactItem} key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
            onDeleteContact={onDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
}
