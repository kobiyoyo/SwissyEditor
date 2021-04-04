// React
import React, { createContext, useReducer, ReactNode } from 'react';

// Context
import appReducer from './AppReducer';

// types
import { GlobalContextState, GlobalAction, GlobalContextModel } from './types';

const initialState: GlobalContextState = {
  files: [{
    id: '1',
    title: 'bad boy',
    content: '#hello world',
  },
  {
    id: '2',
    title: 'Good lad',
    content: '#hello world',
  },
  {
    id: '3',
    title: 'Weak boy',
    content: '#hello world',
  },
  {
    id: '4',
    title: 'Shy boy',
    content: '#hello world',
  }],
};

export const GlobalContext = createContext({} as GlobalContextModel);
type GlobalProviderProps = {
  children: ReactNode,
};
export const GlobalProvider: React.FC <GlobalProviderProps> = (props: GlobalProviderProps) => {
  const { children } = props;
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
