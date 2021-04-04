import React from 'react';

export interface FileItem {
  id: string;
  title: string;
  content: string;
}

export interface GlobalContextState {
  files: FileItem[];
}

export interface GlobalContextModel {
  state: GlobalContextState;
  dispatch: React.Dispatch<GlobalAction>
}

export type GlobalAction =
    | { type: 'ADD_FILE'; payload: FileItem }
    | { type: 'REMOVE_FILE'; payload: string }
    | { type: 'EDIT_FILE'; payload: FileItem };
