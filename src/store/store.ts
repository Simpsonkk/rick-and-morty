import { configureStore } from '@reduxjs/toolkit';

import { charactersApi } from './characters-api';
import { characterSlice } from './slices/character-slice/character-slice';

export const store = configureStore({
  reducer: {
    [charactersApi.reducerPath]: charactersApi.reducer,
    [characterSlice.name]: characterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(charactersApi.middleware),
});
