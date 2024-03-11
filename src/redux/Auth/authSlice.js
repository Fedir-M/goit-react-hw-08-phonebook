import { createSlice } from '@reduxjs/toolkit';
import {
  logInUser,
  logOutUser,
  refreshUser,
  registerUser,
} from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    user: {},
    token: null,
    isRefreshing: false,
    error: null,
    isLoading: false,
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
          isAuth: true,
          isRefreshing: false,
          error: null,
        };
      })
      .addCase(logInUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
          isAuth: true,
          isRefreshing: false,
          error: null,
        };
      })
      .addCase(logOutUser.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isAuth = false;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isAuth = true;
        state.isRefreshing = false;
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        (state, { payload }) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/reject'),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = null;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
