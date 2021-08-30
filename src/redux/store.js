import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import cartReducer from './cart/reducer';
import productReducer from './product/reducer'
import userReducer from './user/reducer';
import newsReducer from './news/reducer';
import searchReducer from './product/reducer'
import {api} from './cart/action'
const reducer ={
     product: productReducer,
     cart:cartReducer,
     user:userReducer,
     news:newsReducer,
     search:searchReducer
   
}

export default configureStore({
     reducer,
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
     devTools: process.env.NODE_ENV !== 'production',
   });