import { combineReducers } from "redux"
import { reducer as form } from "redux-form"

import toggleReducer from "./toggle_reducer"

const rootReducer = combineReducers({
  toggle: toggleReducer
})

export default rootReducer
