declare module StoreModels {
  export interface BeerCollection {
    list: Models.BeerInfo[];
    isLoading: boolean;
    lastFetched?: number;
  }

  export interface UI {
    pageSize: number;
    currentPage: number;
  }
}
