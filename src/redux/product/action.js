import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  GET_PRODUCTS,
  GET_PRODUCT,
  GET_PRODUCTS_NEWS,
  GET_PRODUCT_STORE,
  SEARCH,
} from "../product/type";
import { getApi } from "../api";

export const fetchProducts = createAsyncThunk(
  GET_PRODUCTS,
  async (params, callback) => {
    const endpoint = `http://localhost:4000/api/get-products`;
    const response = await getApi(endpoint);
    const data = await response.data;
    return data;
  }
);

export const fetchProduct = createAsyncThunk(GET_PRODUCT, async (params) => {
  const endpoint = `http://localhost:4000/api/get-product/${params.id}`;
  const response = await getApi(endpoint);
  const data = await response.data;

  return data;
});

export const fetchProductNews = createAsyncThunk(
  GET_PRODUCTS_NEWS,
  async (params) => {
    const endpoint = `http://localhost:4000/api/get-productnew`;
    const response = await getApi(endpoint);
    const data = await response.data;
    return data;
  }
);

export const fetchProductStore = createAsyncThunk(
  GET_PRODUCT_STORE,
  async (params) => {
    const endpoint = `http://localhost:4000/api/get-productstore?page=${params?.filter?.page}&&pageSize=${params?.filter?.pageSize} `;
    const response = await getApi(endpoint);
    const data = await response.data;
    return data;
  }
);

export const fetchSearch = createAsyncThunk(SEARCH, async (params) => {
  const endpoint = `http://localhost:4000/api/search`;
  const response = await getApi(endpoint);
  const data = await response.data;

  return data;
});
