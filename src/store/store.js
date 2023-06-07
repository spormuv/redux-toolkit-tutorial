import { configureStore } from '@reduxjs/toolkit';
import postReducer from './slices/postSlice';
import todoReducer from './slices/todoSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    todo: todoReducer,
    post: postReducer,
  },
});
