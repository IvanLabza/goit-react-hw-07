import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiGet, apiPost, apiDelete } from "../service/Api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (thunkAPI) => {
    const data = await apiGet();
    try {
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    const data = await apiPost(newContact);
    try {
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    const data = await apiDelete(contactId);
    try {
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
