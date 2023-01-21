import React, { useReducer, createContext } from "react";
export const AppContext = createContext();

export const ACTION_TYPES = {
  CHANGE_NAME: "CHANGE_NAME",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { name: "Nkasugu" });
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
