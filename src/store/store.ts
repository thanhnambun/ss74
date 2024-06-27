import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducer/productReducer';


export const store:any = configureStore({
  reducer: {
    product: productReducer,
  },
});