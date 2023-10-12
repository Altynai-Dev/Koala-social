import { createSlice } from "@reduxjs/toolkit";
import { loginAcoount, registerAccount } from "./accountActions";
import { addDataToLocalStorage } from "../../helpers/functions";

const accountSlice = createSlice({
    name: 'account',
    initialState: {
        user: null,
        loading: false,
        status: '',
    },
    reducers:{
        clearStatusState : (state) =>{
            state.status = '';
        },
        clearUserState: (state) => {
            state.user = null;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(registerAccount.pending, (state) => {
            state.loading = true;
        })
        .addCase(registerAccount.fulfilled, (state, action)=>{
            state.loading = false;
        })
        .addCase(registerAccount.rejected, (state)=>{
            state.loading = false;
            state.status = 'error';
        })
        .addCase(loginAcoount.pending, (state)=>{
            state.loading = true;
        })
        .addCase(loginAcoount.fulfilled, (state, action) =>{
            state.loading = false;
            state.user = action.payload.user;
            addDataToLocalStorage(action.payload.data);
            action.payload.navigate('/');
        })
        .addCase(loginAcoount.rejected, (state)=>{
            state.loading = false;
            state.status = 'error';
        })
    }
})

export const {clearStatusState, clearUserState} = accountSlice.actions;
export default accountSlice.reducer;