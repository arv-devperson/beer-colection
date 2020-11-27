import { Action } from '@reduxjs/toolkit';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import ApplicationState from './application-state';

export declare type Thunk<TStore> = ThunkAction<void, TStore, null, Action<string>>;

export declare type AsyncThunk<TStore, TReturnType = void> = ThunkAction<
  Promise<TReturnType>,
  TStore,
  null,
  Action<string>
>;

export type AppDispatch = ThunkDispatch<ApplicationState, null, Action<string>>;

export type AppThunk = Thunk<ApplicationState>;
