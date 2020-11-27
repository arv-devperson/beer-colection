import CardList from 'components/beer-list/beer-list.component';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AppDispatch } from 'store/app-thunk';
import ApplicationState from 'store/application-state';
import { loadBeers } from 'store/beersStore';

interface OverviewPageProps {
  beerCollection: StoreModels.BeerCollection;
  initialLoad: () => void;
}

function OverviewPage(props: OverviewPageProps) {
  useEffect(() => {
    props.initialLoad();
  }, []);

  return !props.beerCollection.isLoading ? <CardList beers={props.beerCollection.list}></CardList> : null;
}

const mapStateToProps = (state: ApplicationState) => {
  return {
    beerCollection: state.entities.beers
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  initialLoad: () => {
    dispatch(loadBeers());
  }
});

const OverviewContainer = connect(mapStateToProps, mapDispatchToProps)(OverviewPage);
export default OverviewContainer;
