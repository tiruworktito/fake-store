import React, { createContext, useContext, useReducer } from "react";
// Context API
// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our apps and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer   by useStateValue hook
export const useStateValue = () => useContext(StateContext);
