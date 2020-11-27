import { createAction } from '@reduxjs/toolkit';

export const apiCallBegan = createAction<any, any>('api/callBegan');
export const apiCallSuccess = createAction<any, any>('api/callSuccess');
export const apiCallFailed = createAction<any, any>('api/callFailed');
