import { createReducer } from "@reduxjs/toolkit";



export const userReducer = createReducer({}, {
   
    
 loginRequest: (state) => {
        state.loading = true;
    },
    loginSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message
    },
    loginFail: (state,action) => {

        state.loading = false;
        state.isAuthenticated = false;
        state.user = action.payload.user;
        state.error = action.payload
    },

    registerRequest: (state) => {
        state.loading = true;
    },
    registerSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message
    },
    registerFail: (state,action) => {

        state.loading = false;
        state.isAuthenticated = false;
        state.user = action.payload.user;
        state.error = action.payload
    },

    

    loaduserRequest: (state) => {
        state.loading = true;
    },
    loaduserSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
       
    },
loaduserFail: (state,action) => {

        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload.user
    },
    //logout
    logoutRequest: (state) => {
        state.loading = true;
    },
    logoutSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.message = action.payload
    },
    logoutFail: (state,action) => {

        state.loading = false;
        state.isAuthenticated = true;
   
        state.error = action.payload
    },

    clearError: state => {
        state.error = null;
    },
    clearmessage: state => {
        state.message = null;
    }
})