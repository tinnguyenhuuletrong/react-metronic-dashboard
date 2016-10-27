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
  "error": "exclamation",
  "info": "user"
}

const ALERT_TYPE_CORRECT = {
  "error": "danger",
}

// type: ["success", "warning", "danger", "info"]
// icon: ["check", "warning", "done", "none"]
export const alertMessage = (options={}) => {
  const defaultOptions = {
    type: "info",
    message: "message",
    closeInSeconds: 5
  }

  // auto correct type
  if(ALERT_TYPE_CORRECT[options.type] != null)
    options.type = ALERT_TYPE_CORRECT[options.type]

  options.icon = DEFAULT_ALERT_ICON_MAP[options.type]

  App.alert(Object.assign(defaultOptions, options))
}
