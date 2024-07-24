import { createReducer, on } from '@ngrx/store';
import { changeColor } from './color.action';

export interface ColorState {
    selectedColor: string;
  }
  
export const initialState: ColorState = {
  selectedColor: ''
};

export const colorReducer = createReducer(
  initialState,
  on(changeColor, (state, { color }) => ({ ...state, selectedColor: color }))
);
