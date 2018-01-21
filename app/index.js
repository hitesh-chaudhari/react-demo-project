import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { NotFound, Dashboard } from './containers';
import './styles';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={ Dashboard }/>
        <Route component={ NotFound }/>
      </Switch>
    </Router>
  </Provider>, document.getElementById('app'));
