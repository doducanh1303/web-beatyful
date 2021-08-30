import { createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';

import {fetchNew,fetchNews} from "./action"

export const newsSlice = createSlice({
  name: 'news',
  initialState: {
    item: {
      loading: false,
      result: {},
      error: {},
    },
    list: {
      loading: false,
      result: {},
      error: {},
    },
  },
  extraReducers: {
    [fetchNews.pending]: (state, action) => {
      state.item.loading = true;
    },
    [fetchNews.fulfilled]: (state, action) => {
      state.item.loading = false;
      state.item.result = action.payload;
    },
    [fetchNews.rejected]: (state, action) => {
      console.error('========> Error: ', action.error.message);
      message.error({
        content: 'Không tìm thấy khóa học.',
        className: 'app-message',
      });
      state.item.loading = false;
      state.item.error = action.error;
    },
    [fetchNew.pending]: (state, action) => {
      state.list.loading = true;
    },
    [fetchNew.fulfilled]: (state, action) => {
      state.list.loading = false;
      state.list.result = action.payload;
    },
    [fetchNew.rejected]: (state, action) => {
      console.error('========> Error: ', action.error.message);
      message.error({
        content: 'Không tìm thấy khóa học.',
        className: 'app-message',
      });
      state.list.loading = false;
      state.list.error = action.error;
    },


  },
});

export const news = (state) => state.news;

export default newsSlice.reducer;
