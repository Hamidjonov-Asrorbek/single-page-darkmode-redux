import React, { createContext, useContext } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { legacy_createStore } from "redux";

const initialState = { darkmode: false };

function reducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_MODE":
      return { ...state, darkmode: !state.darkmode };
    default:
      return state;
  }
}

const store = legacy_createStore(reducer);
export const darkModeContext = createContext();

export function DarkModeProvider({ children }) {
  return (
    <Provider store={store}>
      <darkModeContext.Provider value={useContext(darkModeContext)}>
        {children}
      </darkModeContext.Provider>
    </Provider>
  );
}
