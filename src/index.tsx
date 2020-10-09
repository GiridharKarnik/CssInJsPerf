import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Metrics from "./Metrics";

import * as serviceWorker from './serviceWorker';

import { Route, withRouter, Switch, Redirect, BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
				<Switch>
					<Route path="/" exact component={App} />
					<Route path={"/metrics"} exact component={Metrics} />
				</Switch>
			</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
