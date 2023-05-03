import { store } from '../store/store';
import { CharacterDescription } from './character.types';

export type CharacterState = {
  characters: CharacterDescription[];
  isDataLoaded: boolean;
  termSearch: string;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
