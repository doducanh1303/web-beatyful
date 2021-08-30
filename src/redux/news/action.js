import {createAsyncThunk} from "@reduxjs/toolkit";
import {getApi} from "../api";
import {GET_NEW,GET_NEWS} from "../news/type"

export const fetchNews=createAsyncThunk(GET_NEWS, async (params,callback) =>{
    const endpoint = `http://localhost:4000/api/news`;
    const response = await getApi(endpoint);
    const data = await response.data;
     return data;
})
export const fetchNew=createAsyncThunk(GET_NEW, async (params)=>{
    const endpoint = `http://localhost:4000/api/news/${params.id}`;
    const response = await getApi(endpoint);
    const data = await response.data;
     return data;
})
