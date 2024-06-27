// src/stores/reducers/thunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '../interface/interface';

// Fetch products
export const getProduct:any = createAsyncThunk('product/getProduct', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('http://localhost:8080/listProduct');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return rejectWithValue(error.response.data);
    } else {
      return rejectWithValue('An unexpected error occurred');
    }
  }
});

// Fetch cart data
export const getCart:any = createAsyncThunk('cart/getCart', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('http://localhost:8080/cart');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return rejectWithValue(error.response.data);
    } else {
      return rejectWithValue('An unexpected error occurred');
    }
  }
});

// Add product to cart
export const addToCart:any = createAsyncThunk('cart/addToCart', async (product: Product, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:8080/cart', product);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return rejectWithValue(error.response.data);
    } else {
      return rejectWithValue('An unexpected error occurred');
    }
  }
});

// Update cart
export const updateCart:any = createAsyncThunk('cart/updateCart', async ({ id, quantity }: { id: number; quantity: number }, { rejectWithValue }) => {
  try {
    await axios.put(`http://localhost:8080/cart/${id}`, { quantity });
    return { id, quantity };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return rejectWithValue(error.response.data);
    } else {
      return rejectWithValue('An unexpected error occurred');
    }
  }
});

// Remove product from cart
export const removeFromCart:any = createAsyncThunk('cart/removeFromCart', async (id: number, { rejectWithValue }) => {
  try {
    await axios.delete(`http://localhost:8080/cart/${id}`);
    return id;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return rejectWithValue(error.response.data);
    } else {
      return rejectWithValue('An unexpected error occurred');
    }
  }
});
