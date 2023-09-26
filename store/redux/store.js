import { configureStore } from "@reduxjs/toolkit";
import FavoriteSlice from "./FavoriteSlice";

const store = configureStore({
  reducer: {
    favoriteMeals: FavoriteSlice,
  },
});
