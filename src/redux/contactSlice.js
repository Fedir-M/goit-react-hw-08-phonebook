import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from './contactsOperation';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null
    },
    filter: ""
  },

  reducers: {    
    filterContacts(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
    .addCase(getContacts.fulfilled, (state, {payload}) => {
      state.contacts.items = payload;
      state.contacts.isLoading = false;
    })
    .addCase(addContact.fulfilled, (state, {payload}) => {
      state.contacts.items.push(payload)
    })
    .addCase(deleteContact.fulfilled, (state, {payload}) => {     
      state.contacts.items = state.contacts.items.filter(el => el.id !== payload)
    })
    .addMatcher(
      action => action.type.endsWith('/pending'),
      (state, {payload}) => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      }
    )
    .addMatcher(
      action => action.type.endsWith('/reject'),
      (state, {payload}) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      }
    )
    .addMatcher(
      action => action.type.endsWith('/fulfilled'),
      (state, {payload}) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
      }
    )
  }
});

export const { filterContacts } = contactSlice.actions;

export const contactsReducer = contactSlice.reducer;
