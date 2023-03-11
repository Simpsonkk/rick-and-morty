import { NameSpace } from '../../../consts';
import { CharacterDescription, CharactersInfo } from '../../../types/character.type';
import { State } from '../../../types/state.type';

export const getCharacters = (state: State): CharacterDescription[] => state[NameSpace.Character].characters;
export const getSelectedCharacter = (state: State): CharacterDescription | null => state[NameSpace.Character].selectedCharacter;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Character].isDataLoaded;
export const getTermSearch = (state: State): string => state[NameSpace.Character].termSearch;
export const getCharactersInfo = (state: State): CharactersInfo | null => state[NameSpace.Character].charactersInfo;
