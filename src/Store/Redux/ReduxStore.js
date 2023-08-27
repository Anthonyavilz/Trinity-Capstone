import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Slices/authSlice'
import armorReducer from './Slices/armorSlice'
import searchReducer from './Slices/searchSlice'
import nameReducer from './Slices/armorNameSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        armor: armorReducer,
        search: searchReducer,
        name: nameReducer
    }
})

export default store