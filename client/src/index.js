import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { Router, Route, IndexRoute, browserHistory } from "react-router"
import thunk from "redux-thunk"
import promise from "redux-promise"
import createLogger from "redux-logger"

import reducers from "./reducers"
import App from "./components/app"
import Body from "./components/body"

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import "../build/style/style.scss";

const logger = createLogger();
const store = createStore(
  reducers,
  applyMiddleware(thunk, promise, logger)
)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Body} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>
, document.querySelector("#app"))
