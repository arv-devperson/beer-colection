import CardList from 'components/beer-list/beer-list.component';
import { Pagination } from 'components/pagination';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { AppDispatch } from 'store/app-thunk';
import ApplicationState from 'store/application-state';
import { loadBeers } from 'store/beersStore';
import { goToNextPage, goToPreviousPage } from 'store/uiStore';
import './overview.style.css';

interface OverviewPageProps {
  beerCollection: StoreModels.BeerCollection;
  ui: StoreModels.UI;
  initialLoad: () => void;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
}

function OverviewPage(props: OverviewPageProps) {
  useEffect(() => {
    props.initialLoad();
  }, []);

  return !props.beerCollection.isLoading ? (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Pagination
        currentPage={props.ui.currentPage}
        goToNextPage={props.goToNextPage}
        goToPreviousPage={props.goToPreviousPage}
      />

      <CardList beers={props.beerCollection.list}></CardList>

      <Pagination
        currentPage={props.ui.currentPage}
        goToNextPage={props.goToNextPage}
        goToPreviousPage={props.goToPreviousPage}
      />
    </div>
  ) : (
    <div className="loader">Loading...</div>
  );
}

const mapStateToProps = (state: ApplicationState) => {
  return {
    beerCollection: state.entities.beers,
    ui: state.entities.ui
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  initialLoad: () => {
    dispatch(loadBeers());
  },
  goToNextPage: () => {
    dispatch(goToNextPage());
  },
  goToPreviousPage: () => {
    dispatch(goToPreviousPage());
  }
});

const OverviewContainer = connect(mapStateToProps, mapDispatchToProps)(OverviewPage);
export default OverviewContainer;
