import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'c605a3131fmshfefeff37100a42ap1afec7jsn49bf9d6da20e',
    'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

const baseUrl = 'https://crypto-news16.p.rapidapi.com';

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ count }) => createRequest(`/news/top/${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;