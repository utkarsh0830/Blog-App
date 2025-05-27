import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData : null
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout(state, action) {
            state.status = false;
            state.userData = null;
        },
        setUserData(state, action) {

        }
    }
})

export default authSlice.reducer
export const { login, logout, setUserData } = authSlice.actions;  // export actions