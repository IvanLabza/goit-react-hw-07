import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./contactsOps";
import { createSelector } from "reselect";
import { selectNameFilter } from "./filtersSlice";

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })

      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })

      .addCase(deleteContact.rejected, (action, state) => {
        state.error = action.error;
      })

      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })

      .addCase(addContact.pending, (state) => {
        state.loading = true;
      })

      .addCase(addContact.rejected, (action, state) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const contactsSliceReducer = contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items;

const selectItems = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectItems, selectNameFilter],
  (items, filter) =>
    items.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
