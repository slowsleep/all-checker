import { createSlice } from '@reduxjs/toolkit'
import { getFromStorage, updateItemStorage, removeFromStorage, addToStorage } from '../../utils/storageManager';

export const seriesSlice = createSlice({
    name: 'series',
    initialState: {
        series: getFromStorage("series"),
    },
    reducers: {
        add: (state, action) => {
            let newSeries = action.payload
            addToStorage("series", newSeries)
            state.series = getFromStorage("series")
        },
        edit: (state, action) => {
            let editedSeries = action.payload
            updateItemStorage("series", editedSeries);
            state.series = getFromStorage("series")
        },
        remove: (state, action) => {
            let movieId = action.payload
            removeFromStorage("series", movieId);
            state.series = getFromStorage("series")
        },
    },
})

export const { add, edit, remove } = seriesSlice.actions

export const getSeries = (state) => state.series.series

export default seriesSlice.reducer
