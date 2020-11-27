import { createSlice } from '@reduxjs/toolkit';
import { AppThunk } from './app-thunk';
import ApplicationState from './application-state';
import { loadBeers } from './beersStore';

const initialState: StoreModels.UI = {
  currentPage: 1,
  pageSize: 10
};

const slice = createSlice({
  name: 'uiState',
  initialState,
  reducers: {
    nextPageRequested: (ui: StoreModels.UI) => {
      ui.currentPage += 1;
    },

    previousPageRequested: (ui) => {
      if (ui.currentPage > 1) {
        ui.currentPage -= 1;
      }
    }
  }
});

export const { nextPageRequested, previousPageRequested } = slice.actions;

export default slice.reducer;

// Action creators
export const goToNextPage = (): AppThunk => async (dispatch, getState: () => ApplicationState) => {
  dispatch(nextPageRequested());

  const { currentPage, pageSize } = getState().entities.ui;

  return dispatch(loadBeers(currentPage, pageSize));
};

export const goToPreviousPage = (): AppThunk => async (dispatch, getState: () => ApplicationState) => {
  dispatch(previousPageRequested());

  const { currentPage, pageSize } = getState().entities.ui;

  return dispatch(loadBeers(currentPage, pageSize));
};
