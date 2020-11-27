import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './rootReducer';
import apiMiddleware from './middleware/api-middleware';

export default function () {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), apiMiddleware]
  });
}
