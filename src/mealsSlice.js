import { createSlice } from '@reduxjs/toolkit';

export const mealsSlice = createSlice({
  name: 'meals',
  initialState: [
    {
      name: "Vegetarian Meal",
      cost: 15,
      selected: false,
    },
    {
      name: "Non-Vegetarian Meal",
      cost: 20,
      selected: false,
    },
    {
      name: "Vegan Meal",
      cost: 18,
      selected: false,
    },
  ],
  reducers: {
    toggleMealSelection: (state, action) => {
      const index = action.payload;
      const item = state[index];
      if (item) {
        item.selected = !item.selected;
      }
    },
  },
});

export const { toggleMealSelection } = mealsSlice.actions;

export default mealsSlice.reducer;