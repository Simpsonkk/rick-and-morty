import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { NameSpace } from '../../../consts';
import { CharacterDescription, CharactersInfo } from '../../../types/character.type';
import { CharacterState } from '../../../types/state.type';

const initialState: CharacterState = {
  characters: [],
  selectedCharacter: null,
  isDataLoaded: false,
  termSearch: '',
  charactersInfo: null
};

export const characterSlice = createSlice({
  name: NameSpace.Character,
  initialState,
  reducers: {
    loadCharacters: (state, action: PayloadAction<CharacterDescription[] | null>) => {
      if (!action.payload) {
        state.characters = [];
        return;
      }
      if (state.characters.length) {
        state.characters = [...state.characters, ...action.payload];
      } else {
        state.characters = action.payload;
      }
      state.isDataLoaded = true;
    },
    loadSelectedCharacter: (state, action: PayloadAction<CharacterDescription>) => {
      state.selectedCharacter = action.payload;
    },
    loadTermSearch: (state, action: PayloadAction<string>) => {
      state.termSearch = action.payload;
    },
    loadCharactersInfo: (state, action: PayloadAction<CharactersInfo>) => {
      state.charactersInfo = action.payload;
    },
  },
});

export const {
  loadCharacters,
  loadSelectedCharacter,
  loadTermSearch,
  loadCharactersInfo,
} = characterSlice.actions;
