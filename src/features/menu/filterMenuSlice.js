import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterIngredients: [],
  filterPrice: null,
  filterSold: null,
};

const filterMenuSlice = createSlice({
  name: "filterMenu",
  initialState,
  reducers: {
    addFilterIngredient(state, action) {
      state.filterIngredients.push(action.payload);
    },

    removeFilterIngredient(state, action) {
      state.filterIngredients = state.filterIngredients.filter(
        (ing) => ing !== action.payload
      );
    },

    addFilterPrice(state, action) {
      state.filterPrice =
        action.payload === null ? action.payload : Number(action.payload);
    },

    sold(state, action) {
      state.filterSold = action.payload;
    },

    resetFilter(state) {
      state.filterIngredients = [];
      state.filterPrice = null;
      state.filterSold = null;
    },
  },
});

export const {
  addFilterIngredient,
  removeFilterIngredient,
  addFilterPrice,
  sold,
  resetFilter,
} = filterMenuSlice.actions;

export default filterMenuSlice.reducer;

export const getfilterMenu = (state) => state.filterMenu;
