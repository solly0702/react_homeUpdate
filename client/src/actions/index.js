import axios from "axios"
import {
  TOGGLE_CTRL
} from "./types"

export function toggleCtrl(collapse) {
  return {
    type: TOGGLE_CTRL,
    payload: !collapse
  }
}
