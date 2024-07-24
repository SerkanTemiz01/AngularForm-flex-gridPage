import { createAction, props } from '@ngrx/store';

export const changeColor = createAction(
  '[Color] Change Color',
  props<{ color: string }>()
);
