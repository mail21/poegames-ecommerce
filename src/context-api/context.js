import React, { createContext, useReducer, useContext } from 'react';

export const Context = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <Context.Provider value={useReducer(reducer, initialState)}>{children}</Context.Provider>
);

export const useContextValue = () => useContext(Context);
