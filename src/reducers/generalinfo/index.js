import { ACTION_UPDATE_GENERAL_INFO } from '../../actions/generalinfo.js'

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ACTION_UPDATE_GENERAL_INFO] : (state, action) => {
    
    return Object.assign({}, state, action.payload)
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  accessToken: null,
  displayName: "Unknown",
  avatar: null,
  notifications: [] // {content: "abcd", id: "1"}
}
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
