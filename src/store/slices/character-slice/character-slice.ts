import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CharacterDescription } from '../../../types/character.types';
import { CharacterState } from '../../../types/state.types';
import { sortCharacters } from '../../../utils';

const initialState: CharacterState = {
  characters: [],
  isDataLoaded: false,
  termSearch: '',
};

export const characterSlice = createSlice({
  name: 'characterSlice',
  initialState,
  reducers: {
    loadCharacters: (state, action: PayloadAction<CharacterDescription[] | null>) => {
      if (!action.payload) {
        state.characters = [];
        return;
      }
      const sortedCharacters = [...action.payload].sort(sortCharacters('name'));
      if (state.characters.length) {
        state.characters = [...state.characters, ...sortedCharacters];
      } else {
        state.characters = sortedCharacters;
      }
      state.isDataLoaded = true;
    },
    loadTermSearch: (state, action: PayloadAction<string>) => {
      state.termSearch = action.payload;
    },
  },
});

export const { loadCharacters, loadTermSearch } = characterSlice.actions;
