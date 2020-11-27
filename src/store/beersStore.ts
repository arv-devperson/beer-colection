import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './apiActions';
import { AppThunk } from './app-thunk';
import ApplicationState from './application-state';

const beerList = new Array<Models.BeerInfo>();

const initialState: StoreModels.BeerCollection = {
  list: beerList,
  isLoading: true,
  lastFetched: Date.now()
};

const slice = createSlice({
  name: 'beers',
  initialState,
  reducers: {
    beersRequested: (beers, action) => {
      beers.isLoading = true;
    },

    beersReceived: (beers, action) => {
      beers.list = action.payload;
      beers.isLoading = false;
      beers.lastFetched = Date.now();
    },

    beersRequestFailed: (beers, action) => {
      beers.isLoading = false;
    }
  }
});

export const { beersRequested, beersReceived, beersRequestFailed } = slice.actions;

export default slice.reducer;

// Action Creators
const url = '/beers';

export const loadBeers = (): AppThunk => async (dispatch, getState: () => ApplicationState) => {
  try {
    return dispatch(
      apiCallBegan({
        url,
        onStart: beersRequested.type,
        onSuccess: beersReceived.type,
        onError: beersRequestFailed.type
      })
    );
  } catch (error) {
    // return dispatch(newsRequestFailed('Could not load news.'));
  }
};
// Selector
