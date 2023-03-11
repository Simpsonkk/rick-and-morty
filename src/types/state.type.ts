import { store } from '../store/store';
import { CharacterDescription, CharactersInfo } from './character.type';

export type CharacterState = {
  characters: CharacterDescription[];
  selectedCharacter: CharacterDescription | null;
  isDataLoaded: boolean;
  termSearch: string;
  charactersInfo: CharactersInfo | null;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
