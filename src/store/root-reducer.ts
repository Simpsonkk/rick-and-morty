import { combineReducers } from '@reduxjs/toolkit';

import { NameSpace } from '../consts';
import { characterSlice } from './slices/character/character';

export const rootReducer = combineReducers({
  [NameSpace.Character]: characterSlice.reducer,
  // [NameSpace.User]: userProcess.reducer,
});
