import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from "../actions/types";
import shortid from "shortid";
import _ from "lodash";

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_FLASH_MESSAGE:
      return {
        ...state,
        [shortid.generate()] : action.message
      }
    case DELETE_FLASH_MESSAGE:
      return _.omit(state, action.id)

    default:
      return state;
  }

}
