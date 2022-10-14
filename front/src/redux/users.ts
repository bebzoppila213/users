import { createSlice, configureStore } from '@reduxjs/toolkit'
import { IUser } from "../interfaces"

interface IInitialState{
    allUsers: Array<IUser>, 
    filterUsers: Array<IUser>
}

const initialState: IInitialState = {
    allUsers: [], filterUsers: [],
}


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

        appendUsers: (state, data) => {
            state.allUsers = data.payload
            state.filterUsers = data.payload
        },

        filter: (state, data) => {
            state.filterUsers = state.allUsers.filter(user => user.name.toLowerCase().includes(data.payload.toLowerCase()))
        }
        
    }
})

export const { appendUsers, filter } = usersSlice.actions

export const store = configureStore({
    reducer: usersSlice.reducer
})