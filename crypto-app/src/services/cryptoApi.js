import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'c605a3131fmshfefeff37100a42ap1afec7jsn49bf9d6da20e',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseURL = 'https://coinranking1.p.rapidapi.com/coins';

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseURL }),
    endpoints: (builder) => ({
        getCrypto: builder.query({
            query: () => createRequest('/exchanges')
        })
    })
})