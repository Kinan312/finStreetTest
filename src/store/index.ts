import {configureStore} from '@reduxjs/toolkit';
import authReducer from './reducers/AuthReducers';
import generalReducer from './reducers/GeneralReducers';

const store = configureStore({
  reducer: {
    authR: authReducer,
    generalR: generalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
