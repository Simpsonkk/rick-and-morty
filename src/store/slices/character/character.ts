import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { NameSpace } from '../../../consts';
import { Character } from '../../../types/character.type';
import { CharacterState } from '../../../types/state.type';

const initialState: CharacterState = {
  characters: [],
  selectedCharacter: null,
  isDataLoaded: false,
};

export const characterSlice = createSlice({
  name: NameSpace.Character,
  initialState,
  reducers: {
    loadCharacters: (state, action: PayloadAction<Character[]>) => {
      state.characters = action.payload;
      state.isDataLoaded = true;
    },
    loadSelectedCharacter: (state, action: PayloadAction<Character>) => {
      state.selectedCharacter = action.payload;
    },
  },
});

export const {
  loadCharacters,
  loadSelectedCharacter,
} = characterSlice.actions;
