import { AxiosInstance } from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { APIRoute } from '../consts';
import { errorHandler } from '../services/errorHandler';
import { CharacterDescription, Characters } from '../types/character.type';
import { SearchParams } from '../types/search-params.type';
import { AppDispatch } from '../types/state.type';
import {
  loadCharacters,
  loadCharactersInfo,
  loadSelectedCharacter,
} from './slices/character-slice/character-slice';

export const fetchCharacters = createAsyncThunk<
  void,
  SearchParams,
  { extra: { api: AxiosInstance }; dispatch: AppDispatch }
>(
  'fetchCharacters',
  async (params: { termSearch: string; pageNumber: number }, { extra: { api }, dispatch }) => {
    try {
      const { data } = await api.get<Characters>(
        `?${APIRoute.Name}=${params.termSearch}&${APIRoute.Page}=${params.pageNumber}`
      );
      dispatch(loadCharactersInfo(data.info));
      dispatch(loadCharacters(data.results));
    } catch (error) {
      errorHandler(error);
    }
  }
);

export const fetchSelectedCharacter = createAsyncThunk<
  void,
  string | undefined,
  { extra: { api: AxiosInstance }; dispatch: AppDispatch }
>('fetchSelectedCharacter', async (characterId, { extra: { api }, dispatch }) => {
  try {
    const { data } = await api.get<CharacterDescription>('/' + characterId);
    dispatch(loadSelectedCharacter(data));
  } catch (error) {
    errorHandler(error);
  }
});
