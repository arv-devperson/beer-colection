export default interface ApplicationState {
  entities: {
    beers: StoreModels.BeerCollection;
    ui: StoreModels.UI;
  };
}
