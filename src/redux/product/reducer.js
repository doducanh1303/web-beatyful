import { createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';

import { fetchProduct, fetchProducts,fetchProductNews,fetchProductStore } from '../product/action';

export const productSlice = createSlice({
  name: 'product',
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
    productnew:{
      loading: false,
      result: {},
      error: {},
    },
    productstore:{
      loading: false,
      result: {},
      error: {},
    }

  },
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.item.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.item.loading = false;
      state.item.result = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      console.error('========> Error: ', action.error.message);
      message.error({
        content: 'Không tìm thấy khóa học.',
        className: 'app-message',
      });
      state.item.loading = false;
      state.item.error = action.error;
    },

    [fetchProduct.pending]: (state, action) => {
      state.list.loading = true;
    },
    [fetchProduct.fulfilled]: (state, action) => {
      state.list.loading = false;
      state.list.result = action.payload;
    },
    [fetchProduct.rejected]: (state, action) => {
      console.error('========> Error: ', action.error.message);
      message.error({
        content: 'Không tìm thấy các khóa học.',
        className: 'app-message',
      });
      state.list.loading = false;
      state.list.error = action.error;
    },

    
    [fetchProductNews.pending]: (state, action) => {
      state.productnew.loading = true;
    },
    [fetchProductNews.fulfilled]: (state, action) => {
      state.productnew.loading = false;
      state.productnew.result = action.payload;
    },
    [fetchProductNews.rejected]: (state, action) => {
      console.error('========> Error: ', action.error.message);
      message.error({
        content: 'Không tìm thấy các khóa học.',
        className: 'app-message',
      });
      state.productnew.loading = false;
      state.productnew.error = action.error;
    },

        
    [fetchProductStore.pending]: (state, action) => {
      state.productstore.loading = true;
    },
    [fetchProductStore.fulfilled]: (state, action) => {
      state.productstore.loading = false;
      state.productstore.result = action.payload;
    },
    [fetchProductStore.rejected]: (state, action) => {
      console.error('========> Error: ', action.error.message);
      message.error({
        content: 'Không tìm thấy các khóa học.',
        className: 'app-message',
      });
      state.productstore.loading = false;
      state.productstore.error = action.error;
    },
  },
});

export const product = (state) => state.product;

export default productSlice.reducer;
