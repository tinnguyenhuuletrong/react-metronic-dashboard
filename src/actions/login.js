// ------------------------------------
// Constants
// ------------------------------------
export const ACTION_LOGIN = 'ACTION_LOGIN'


// ------------------------------------
// Actions
// ------------------------------------
export const fakeLogin = (username, password, rememberMe) => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : "ACTION_UPDATE_GENERAL_INFO",
          payload : {
            accessToken: "fakeToken",
            displayName: username || "Fake Account"
          }
        })
        resolve()
      }, 1000)
    })
  }
}

export const actions = {
  fakeLogin,
}
