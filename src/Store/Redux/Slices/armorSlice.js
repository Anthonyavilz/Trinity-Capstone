import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    helmOptions: [],
    chestOptions: [],
    legOptions: [],
    selectedHelm: '',
    selectedChest: '',
    selectedLeg: ''
}

const armorSlice = createSlice({
    name: 'armor',
    initialState,
    reducers: {
        setHelmOptions: (state, action) => {
            state.helmOptions = action.payload
        },
        setChestOptions: (state, action) => {
            state.chestOptions = action.payload
        },
        setLegOptions: (state, action) => {
            state.legOptions = action.payload
        },
        setSelectedHelm: (state, action) => {
            state.selectedHelm = action.payload
        },
        setSelectedChest: (state, action) => {
            state.selectedChest = action.payload
        },
        setSelectedLeg: (state, action) => {
            state.selectedLeg = action.payload
        },
        clearOptions: (state) => {
            state.selectedHelm = ''
            state.selectedChest = ''
            state.selectedLeg = ''
        },
    }
})

// console.log('in armorSlice', armorSlice)

export const { 
    setHelmOptions,
    setChestOptions,
    setLegOptions,
    setSelectedHelm,
    setSelectedChest,
    setSelectedLeg,
    clearOptions
} = armorSlice.actions

export default armorSlice.reducer