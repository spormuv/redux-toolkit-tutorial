import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL_GET = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
const API_URL_DEL = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (_, { dispatch }) => {
    const res = await axios.get(API_URL_GET);
    dispatch(setPosts(res.data));
  }
);

export const deletePostById = createAsyncThunk(
  'posts/deletePostById',
  async (id, { dispatch }) => {
    axios.delete(`${API_URL_DEL}/${id}`);
    dispatch(deletePost(id));
  }
);

const initialState = {
  posts: [],
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    deletePost(state, action) {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
  extraReducers: {
    [getPosts.pending]: () => console.log('getPosts: pending'),
    [getPosts.fulfilled]: () => console.log('getPosts: fullfilled'),
    [getPosts.rejected]: () => console.log('getPosts: rejected'),
    [deletePostById.pending]: () => console.log('deletePostById: pending'),
    [deletePostById.fulfilled]: () => console.log('deletePostById: fullfilled'),
    [deletePostById.rejected]: () => console.log('deletePostById: rejected'),
  },
});

export const { setPosts, deletePost } = postSlice.actions;
export default postSlice.reducer;
