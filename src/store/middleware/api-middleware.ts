import axios from 'axios';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { AppDispatch } from 'store/app-thunk';
import * as actions from '../apiActions';

const api: any = ({ dispatch }: { dispatch: AppDispatch }) => (next: Dispatch<AnyAction>) => async (action: any) => {
  if (action.type !== actions.apiCallBegan.type) return next(action);

  const { url, method, data, onStart, onSuccess, onError } = action.payload;

  if (onStart) dispatch({ type: onStart });

  next(action);

  try {
    const response = await axios.request({
      baseURL: 'https://api.punkapi.com/v2/',
      url,
      method,
      data
    });
    // General
    dispatch(actions.apiCallSuccess(response.data));
    // Specific
    if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    // General
    dispatch(actions.apiCallFailed(error.message));
    // Specific
    if (onError) dispatch({ type: onError, payload: error.message });
  }
};

export default api;
