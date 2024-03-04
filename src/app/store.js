import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movie/movieSlice";
import seriesReducer from "../features/series/seriesSlice"

export const store = configureStore({
    reducer: {
        movie: movieReducer,
        series: seriesReducer,
    },
})
