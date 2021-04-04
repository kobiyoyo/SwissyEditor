import React from 'react';

// types
import { GlobalContextState, GlobalAction, GlobalContextModel } from './types';

const AppReducer = (state: GlobalContextState, action: GlobalAction) : GlobalContextState => {
  switch (action.type) {
    case 'ADD_FILE': {
      return {
        ...state,
        files: [...state.files, action.payload],
      };
    }
    case 'REMOVE_FILE': {
      return {
        ...state,
        files: state.files.filter((file) => file.id !== action.payload),
      };
    }
    case 'EDIT_FILE': {
      const updatedFile = action.payload;
      const updatedFiles = state.files.map((file) => {
        if (file.id === updatedFile.id) {
          return updatedFile;
        }
        return file;
      });
      return {
        ...state,
        files: updatedFiles,
      };
    }

    default:
      return state;
  }
};

export default AppReducer;
