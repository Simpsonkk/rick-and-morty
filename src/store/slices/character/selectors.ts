import { NameSpace } from '../../../consts';
import { Character } from '../../../types/character.type';
import { State } from '../../../types/state.type';

export const getCharacters = (state: State): Character[] => state[NameSpace.Character].characters;
export const getSelectedCharacter = (state: State): Character | null => state[NameSpace.Character].selectedCharacter;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Character].isDataLoaded;
