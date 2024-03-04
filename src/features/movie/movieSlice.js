import { createSlice } from '@reduxjs/toolkit'
import { getFromStorage, updateItemStorage, removeFromStorage, addToStorage } from '../../utils/storageManager';

export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movies: getFromStorage("movie"),
    },
    reducers: {
        add: (state, action) => {
            let newMovie = action.payload
            addToStorage("movie", newMovie)
            state.movies = getFromStorage("movie")
        },
        edit: (state, action) => {
            let editedMovie = action.payload
            updateItemStorage("movie", editedMovie);
            state.movies = getFromStorage("movie")
        },
        remove: (state, action) => {
            let movieId = action.payload
            removeFromStorage("movie", movieId);
            state.movies = getFromStorage("movie")
        },
    },
})

export const { add, edit, remove } = movieSlice.actions

export const getMovies = (state) => state.movie.movies

export default movieSlice.reducer
