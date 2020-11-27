import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { OverviewPage } from 'pages/overview';
import { EditPage } from 'pages/edit';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import AppHeader from 'components/header/header.component';

const store = configureStore();

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <AppHeader />
        <Switch>
          <Route path="/overview" exact component={OverviewPage} />
          <Route path="/edit/:id" component={EditPage} />

          <Redirect from="/" exact to="/overview" />
          <Redirect to="/not-found" />
        </Switch>
      </Provider>
    </React.Fragment>
  );
}

export default App;
