import React, { Component, PropTypes } from 'react'

class HeaderNotification extends Component {

  render () {
    const {content, onClick} = this.props

    return <li className="external">
      <h3>
        {content}
      </h3>
      <a onClick={itm=> {
        onClick && onClick()
      }}>
        go
      </a>
    </li>
  }

}

export default HeaderNotification
