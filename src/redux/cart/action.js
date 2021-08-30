
import {createApi,fetchBaseQuery} from '@rtk-incubator/rtk-query';
import {postApi} from "../api";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {ADD_TO_CART} from "./type";

export const fetchcart=createAsyncThunk(ADD_TO_CART,()=>{
    const enponit=`http://localhost:4000/api/addtocart`
    const respone=postApi(enponit)
    const  data=respone.data
    console.log('data.......',data)
    return data

})


