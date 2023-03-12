import { CharacterDescription, CharactersInfo } from '../../../types/character.type';
import { State } from '../../../types/state.type';

export const getCharacters = (state: State): CharacterDescription[] => state.characters;
export const getSelectedCharacter = (state: State): CharacterDescription | null => state.selectedCharacter;
export const getLoadedDataStatus = (state: State): boolean => state.isDataLoaded;
export const getTermSearch = (state: State): string => state.termSearch;
export const getCharactersInfo = (state: State): CharactersInfo | null => state.charactersInfo;
