import { GlobalAction, FileItem } from './types';

export const addFile = (file: FileItem): GlobalAction => ({
  type: 'ADD_FILE',
  payload: file,
});

export const removeFile = (id:string): GlobalAction => ({
  type: 'REMOVE_FILE',
  payload: id,
});

export const editFile = (file:FileItem): GlobalAction => ({
  type: 'EDIT_FILE',
  payload: file,
});
