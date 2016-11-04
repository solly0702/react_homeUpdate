import axios from "axios"

const ROOT_URL = "http://localhost:5000";

export function msgSend(msgData) {
  return dispatch => {
    return axios.post(`${ROOT_URL}/api/message`, msgData)
  }
}
