import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    firstName: '',
    lastName: '',
    username: '',
    password: ''
}

const loggingSlice = createSlice({
    name: 'logging',
    initialState,
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload
        },
        setLastName: (state, action) => {
            state.lastName = action.payload
        },
        setUsername: (state, action) => {
            state.username = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        }
    }
})

export const { setFirstName, setLastName, setUsername, setPassword } = loggingSlice.actions

export default loggingSlice.reducer