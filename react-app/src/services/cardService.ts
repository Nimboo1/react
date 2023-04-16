import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const url = 'https://rickandmortyapi.com/api';

export const cardAPI = createApi({
  reducerPath: 'cardAPI',
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (build) => ({
    fetchCards: build.query({
      query: (nameParam: string | undefined) => ({
        url: '/character',
        params: {
          name: nameParam,
        },
      }),
    }),
  }),
});

export const { useLazyFetchCardsQuery } = cardAPI;
