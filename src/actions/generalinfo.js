// ------------------------------------
// Constants
// ------------------------------------
export const ACTION_UPDATE_GENERAL_INFO = 'ACTION_UPDATE_GENERAL_INFO'


// ------------------------------------
// Actions
// ------------------------------------
export function updateGeneralInfo (value = {}) {
  return {
    type    : ACTION_UPDATE_GENERAL_INFO,
    payload : value
  }
}

export const actions = {
  updateGeneralInfo,
}
