import React, { createContext } from "react";
import ProductsAPI from "./api/ProductsAPI";
import UserAPI from "./api/UserAPI";

import { useSelector } from "react-redux";
import CategoriesAPI from "./api/CategoriesAPI";
export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const token = useSelector((state) => state.token);

  const state = {
    token: token,
    productsAPI: ProductsAPI(),
    userAPI: UserAPI(token),
    categoriesAPI: CategoriesAPI(),
  };
  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
