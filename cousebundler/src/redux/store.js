import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from '../redux/reducer/userReducer.js'
const store = configureStore({
    reducer: {
        users: userReducer
    }
});


export default store;


export const server = 'http://localhost:4000/api/v1'
