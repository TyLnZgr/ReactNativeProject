import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  remoteFavorite: (id) => {},
});

function FavoriteContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);
  const addFavorite = (id) =>
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  const removeFavorite = (id) =>
    setFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealID) => mealID !== id)
    );

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContextProvider;
