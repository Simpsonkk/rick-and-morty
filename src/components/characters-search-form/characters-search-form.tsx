import './characters-search-form.scss';

import { ChangeEvent, useState } from 'react';

import userAuthIcon from '../../assets/img/user_auth_.svg';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useDebounce } from '../../hooks/useDebounce';
import { loadTermSearch } from '../../store/slices/character/character';
import { getTermSearch } from '../../store/slices/character/selectors';

function CharactersSearchForm() {
  const defaultValue = useAppSelector(getTermSearch);
  const [inputValue, setInputValue] = useState<string>(defaultValue);
  const dispatch = useAppDispatch();

  const makeRequest = useDebounce(() => {
    dispatch(loadTermSearch(inputValue.trim()));
  }, 300);

  const getInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    makeRequest();
  };

  return (
    <div className="characters__input-container">
      <input
        className="characters__search"
        value={inputValue}
        onChange={getInputValue}
        type="text"
        placeholder="Filter by name..."
      />
      <img className="characters__icon" src={userAuthIcon} alt="user_icon" />
    </div>
  );
}

export default CharactersSearchForm;
