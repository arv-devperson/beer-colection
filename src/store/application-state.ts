import { Store } from 'redux';

export default interface ApplicationState {
  entities: {
    beers: StoreModels.BeerCollection;
  };
}
