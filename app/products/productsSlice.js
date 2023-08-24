import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apikey="apikey=ff3c4395"

export const productsApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
      getProducts: builder.query({
        query: (name) => "/products",
      }),
    }),
  })

  export const { useGetProductsQuery} = productsApi