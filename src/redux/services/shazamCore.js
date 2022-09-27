import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '6612e37dd2mshcda1b49d16f7cabp1ad1fajsnfec3923d3eae')
            
            return headers
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
    })
})

export const {
    useGetTopChartsQuery,
} = shazamCoreApi