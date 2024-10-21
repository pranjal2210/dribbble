import React, { createContext, useEffect, useReducer, ReactNode } from "react";
import { User } from "../types/User";

interface GlobalState {
  users: User[];
  currentUser: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  categories: any[]; // Adjust this type as needed
}

const initialState: GlobalState = {
  users: [],
  currentUser: JSON.parse(localStorage.getItem("currentUser") || "null"),
  isAuthenticated: !!localStorage.getItem("currentUser"),
  loading: false,
  error: null,
  categories: [],
};

type Action =
  | { type: "REGISTER"; payload: User }
  | { type: "LOGIN"; payload: User }
  | { type: "LOGOUT" }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string }
  | { type: "SET_CATEGORIES"; payload: any[] };

const globalReducer = (state: GlobalState, action: Action): GlobalState => {
  switch (action.type) {
    case "REGISTER":
      return { ...state, users: [...state.users, action.payload] };
    case "LOGIN":
      return { ...state, isAuthenticated: true, currentUser: action.payload };
    case "LOGOUT":
      return { ...state, isAuthenticated: false, currentUser: null };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};

interface GlobalStateProviderProps {
  children: ReactNode;
}

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  useEffect(() => {
    if (state.currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [state.currentUser]);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const GlobalStateContext = createContext<{
  state: GlobalState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });
