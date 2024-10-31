import { useId } from 'react';
import style from './SearchBox.module.css';

export default function SearchBox({ filterValue, handleChange }) {
  const searchId = useId();

  return (
    <div className={style.searchBox}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="text"
        value={filterValue}
        onChange={handleChange}
        name="searchContact"
        id={searchId}
      />
    </div>
  );
}
