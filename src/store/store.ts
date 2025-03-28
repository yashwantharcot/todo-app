import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import taskReducer from './reducers/taskReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

