import { CharacterDescription } from './types/character.type';

export const getTermSearchFromLS = () => {
  const data = sessionStorage.getItem('termSearch');
  return data ? JSON.parse(data) : '';
};

export const sortCharacters =
  (field: keyof CharacterDescription) =>
  (item1: CharacterDescription, item2: CharacterDescription) => {
    if (item1[field] > item2[field]) {
      return 1;
    }
    if (item1[field] < item2[field]) {
      return -1;
    }
    return 0;
  };
