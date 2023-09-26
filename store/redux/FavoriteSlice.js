import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
};
const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFav: (state, action) => {
      state.ids.push(action.payload.id);
    },
    remFav: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const { addFav, remFav } = favoriteSlice.actions;
export default favoriteSlice.reducer;
