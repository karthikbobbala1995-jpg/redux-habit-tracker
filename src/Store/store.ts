import { configureStore } from "@reduxjs/toolkit";
import habitsReducer from './habit.slice'

const Store = configureStore({
    reducer:{
        habits:habitsReducer
    }
})
export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch

export default Store;