import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { MuiThemeProvider } from 'material-ui/styles/';

// middleware
import thunk from "redux-thunk";
import promise from "redux-promise";

import reducers from "./reducers";
import routes from "./routes";

injectTapEventPlugin();
const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk, promise),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router history={browserHistory} routes={routes} />
    </MuiThemeProvider>
  </Provider>
, document.querySelector("#app"))
