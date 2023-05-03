import { CharacterDescription, CharactersInfo } from '../../../types/character.types';
import { State } from '../../../types/state.types';

export const getCharacters = (state: State): CharacterDescription[] =>
  state.characterSlice.characters;
export const getLoadedDataStatus = (state: State): boolean => state.characterSlice.isDataLoaded;
export const getTermSearch = (state: State): string => state.characterSlice.termSearch;
