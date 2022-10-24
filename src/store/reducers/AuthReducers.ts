import {createSlice} from '@reduxjs/toolkit';

interface UserState {
  authenticated: boolean;
  primaryColor: string;
}

let initialState: UserState = {
  authenticated: false,
  primaryColor: '#6408AC',
};

const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    logIn(state) {
      state.authenticated = true;
      state.primaryColor = '#007FFF';
    },
    logOut(state) {
      state.authenticated = false;
      state.primaryColor = '#6408AC';
    },
  },
});

export const {logIn, logOut} = authSlice.actions;

export default authSlice.reducer;
