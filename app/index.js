import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { NotFound, Dashboard } from './containers';
import axios from "axios";
import qs from "query-string";

import { STRING_CONSTANTS } from "./utils/constant/";
import store from './redux/store';
import { GlobalStyles } from "./styles";

axios.defaults.baseURL = `${STRING_CONSTANTS.BASE_URL}?${qs.stringify({api_key: STRING_CONSTANTS.API_KEY})}`;

axios.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    if(error && error.response && error.response.status === 401) {
        window.location.reload();
    }

    return Promise.reject(error);
});

axios.interceptors.request.use((config) => {
    return config;
}, function (error) {
    return Promise.reject(error);
});

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <Router>
      <Switch>
        <Route exact path="/" component={ Dashboard }/>
        <Route component={ NotFound }/>
      </Switch>
    </Router>
  </Provider>, document.getElementById('app'));
