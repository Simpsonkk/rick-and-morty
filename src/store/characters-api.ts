import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { CharacterDescription, Characters } from '../types/character.types';
import { SearchParams } from '../types/search-params.types';

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/character' }),
  endpoints: (builder) => ({
    getCharacters: builder.query<Characters, SearchParams>({
      query: (params) => ({
        url: '',
        params: {
          name: params.termSearch,
          page: params.pageNumber,
        },
      }),
    }),
    getSelectedCharacter: builder.query<CharacterDescription, string>({
      query: (characterId) => characterId,
    }),
  }),
});

export const { useGetCharactersQuery, useGetSelectedCharacterQuery } = charactersApi;
