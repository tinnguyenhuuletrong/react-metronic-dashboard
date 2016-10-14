export const setLoading = (val = false) => {
  if(val)
    App.startPageLoading({animate: true})
  else
    App.stopPageLoading()
}

export const scrollToTop = (val) => {
  App.scrollTo();
}

const DEFAULT_ALERT_ICON_MAP = {
  "success": "check",
  "warning": "warning",
  "danger": "exclamation",
  "info": "user"
}

// type: ["success", "warning", "danger", "info"]
// icon: ["check", "warning", "done", "none"]
export const alertMessage = (options={}) => {
  const defaultOptions = {
    type: "info",
    message: "message",
    closeInSeconds: 5
  }
  defaultOptions.icon = DEFAULT_ALERT_ICON_MAP[defaultOptions.type]

  App.alert(Object.assign(defaultOptions, options))
}
