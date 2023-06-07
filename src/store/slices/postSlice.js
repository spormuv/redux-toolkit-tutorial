import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get(`${POSTS_URL}?_limit=10`);
    dispatch(setPosts(res.data));
  }
);

export const removePostById = createAsyncThunk(
  'posts/removePost',
  async (id, { rejectWithValue, dispatch }) => {
    await axios.delete(`${POSTS_URL}/${id}`);
    dispatch(removePost(id));
  }
);

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    removePost(state, action) {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
  },
  extraReducers: {
    [getPosts.pending]: () => console.log('getPosts: pending'),
    [getPosts.fulfilled]: () => console.log('getPosts: fulfilled'),
    [getPosts.rejected]: () => console.log('getPosts: rejected'),
    [removePostById.pending]: () => console.log('removePostById: pending'),
    [removePostById.fulfilled]: () => console.log('removePostById: fulfilled'),
    [removePostById.rejected]: () => console.log('removePostById: rejected'),
  },
});

export const { setPosts, removePost } = postSlice.actions;
export default postSlice.reducer;
