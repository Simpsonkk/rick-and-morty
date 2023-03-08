import { store } from '../store/store';
import { Character } from './character.type';

export type CharacterState = {
  characters: Character[];
  selectedCharacter: Character | null;
  isDataLoaded: boolean;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
