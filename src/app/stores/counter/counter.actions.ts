import { createAction, props } from '@ngrx/store';

export const nCounters = createAction(
  '[Counter] N Counters'
);

export const nCountersSuccess = createAction(
  '[Counter] N Counters Success',
  props<{ data: any }>()
);

export const nCountersFailure = createAction(
  '[Counter] N Counters Failure',
  props<{ error: any }>()
);
