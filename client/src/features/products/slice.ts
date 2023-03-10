import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "~/types";

interface State {
  response?: string;
  details?: Product;
  list?: Product[];
  getting: boolean;
  getError: boolean;
  listing: boolean;
  listError: boolean;
}

const initialState: State = {
  response: undefined,
  details: undefined,
  list: undefined,
  getting: false,
  getError: false,
  listing: false,
  listError: false,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getStart: (state) => {
      state.getting = true;
    },
    getSuccess: (state, action: PayloadAction<Product>) => {
      state.details = action.payload;
      state.getError = false;
      state.getting = false;
    },
    getFail: (state, action: PayloadAction<string>) => {
      state.details = undefined;
      state.response = action.payload;
      state.getError = true;
      state.getting = false;
    },
    listStart: (state) => {
      state.listing = true;
    },
    listSuccess: (state, action: PayloadAction<Product[]>) => {
      state.list = action.payload;
      state.listError = false;
      state.listing = false;
    },
    listFail: (state, action: PayloadAction<string>) => {
      state.list = undefined;
      state.response = action.payload;
      state.listError = true;
      state.listing = false;
    },
  },
});

export const {
  getStart,
  getSuccess,
  getFail,
  listFail,
  listStart,
  listSuccess,
} = productSlice.actions;

export default productSlice.reducer;