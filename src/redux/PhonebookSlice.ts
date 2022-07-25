import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TContact = {
  id: string,
  name: string,
  number: string,
};

export type TContactsState = {
  items: TContact[],
  filter: string | false,
  };

const initialState: TContactsState = {
  items: [],
  filter: '',
};

export const PhonebookSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<TContact>) {
      state.items.push(action.payload);
    },
    deleteItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

export const { addItem, deleteItem, updateFilter } = PhonebookSlice.actions;