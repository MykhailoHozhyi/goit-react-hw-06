import { HiPhone, HiUser } from 'react-icons/hi2';
import style from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const onDeleteContact = () => dispatch(deleteContact(id));

  return (
    <>
      <div>
        <p className={style.contactInfo}>
          <HiUser />
          {name}
        </p>
        <p className={style.contactInfo}>
          <HiPhone />
          {number}
        </p>
      </div>

      <button type="button" onClick={onDeleteContact}>
        Delete
      </button>
    </>
  );
}
