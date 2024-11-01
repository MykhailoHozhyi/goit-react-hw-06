import { useId } from 'react';
import style from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const searchId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = event => dispatch(changeFilter(event.target.value));

  return (
    <div className={style.searchBox}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        name="searchContact"
        id={searchId}
      />
    </div>
  );
}
