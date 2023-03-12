import { configureStore } from '@reduxjs/toolkit';

import { createAPI } from '../services/api';
import { characterSlice } from './slices/character-slice/character-slice';

const api = createAPI();

export const store = configureStore({
  reducer: characterSlice.reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { api },
      },
    }),
});
