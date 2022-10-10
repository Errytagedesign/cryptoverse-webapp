import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Api request headers
const cryptoNewsHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "78bf95013fmsh55c60620a15fb9dp10fddcjsn6f4b315f827c",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

// Api baseUrl
const baseUrl = "https://bing-news-search1.p.rapidapi.com";

// Create request, a function that holds the headers and accept url as parameters, to avoid repeating the headers and url in every request

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

// Export endpoints api
export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",

  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),

  // endpoints, to get specific request from api

  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
