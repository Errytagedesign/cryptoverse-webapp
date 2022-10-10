import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Api request headers
const cryptoApiHeaders = {
  "X-RapidAPI-Key": "78bf95013fmsh55c60620a15fb9dp10fddcjsn6f4b315f827c",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

// Api baseUrl
const baseUrl = "https://coinranking1.p.rapidapi.com";

// Create request, a function that holds the headers and accept url as parameters, to avoid repeating the headers and url in every request

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

// Export APIs and endpoints
export const cryptoApi = createApi({
  // name of your reducer
  reducerPath: "cryptoApi",
  // api url
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),

  // endpoints, to get specific request from api
  endpoints: (builder) => ({
    // name your endpoint request

    // get cryptos
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),

    // Get cryptodetails endpoint for a single coin base on it's id
    getCryptosDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),

    // Get cryptohistory endpoint for a single coin base on it's id to display it's chart usinh chartjs
    getCryptosHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`/coin/${coinId}/history?timeperiod=${timePeriod}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptosDetailsQuery,
  useGetCryptosHistoryQuery,
} = cryptoApi;

// const options = {
//     method: 'GET',
//     url: ,
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {

//     }
//   };
