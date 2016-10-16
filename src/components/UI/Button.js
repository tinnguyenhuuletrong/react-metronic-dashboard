import React, { Component, PropTypes } from 'react'
import classNames  from 'classnames';

class Button extends Component {
  static propTypes = {
    // Standard Button Type
    type: React.PropTypes.oneOf(['default', 'primary', 'success', 'info', 'link']),

    // Button Icon (fa-*)
    icon: React.PropTypes.string,

    // Enable/Disable
    enable: React.PropTypes.bool,

    // Css-Block Display style or not
    block: React.PropTypes.bool,

    // OnClick handler
    onClick: React.PropTypes.func
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.enable !== nextProps.enable;
  }

  render() {
    const {type, enable, content, icon, block, onClick, children} = this.props
    const computeStyles = [
      "btn",
      "btn-" + type,
      enable ? "" : "disabled",
      block ? "" : "btn-block"
    ]

    return <button className={classNames(computeStyles)} onClick={ _=> {
      enable && onClick && onClick()
    }}>
      { icon && <i className={classNames(["fa", "fa-" + icon])}></i> }
      { children }
    </button>
  }
}

Button.defaultProps = {
  type: "default",
  // icon: "fa-user",
  enable: true
}

export default Button
