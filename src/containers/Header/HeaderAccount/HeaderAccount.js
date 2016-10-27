import React, { Component, PropTypes } from 'react'
import HeaderNotification from '../../../components/HeaderNotification'

const DefaultAvatar = "https://avatars3.githubusercontent.com/u/10923944?s=60"

class HeaderAccount extends Component {
  static propTypes = {
    notificationClick: PropTypes.func,
    generalInfo: PropTypes.object,
    logOutClick: PropTypes.func
  }

  componentWillMount() {

  }

  render () {
    const {notificationClick, logOutClick, generalInfo} = this.props
    const notifications = generalInfo.notifications || []
    const avatar = generalInfo.avatar || DefaultAvatar
    const displayName = generalInfo.displayName || "TinTaToi"

    return (
      <div className="top-menu">
        <ul className="nav navbar-nav pull-right">
          <li className="dropdown dropdown-extended dropdown-notification" id="header_notification_bar">
            { notifications && notifications.length > 0 && <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
              <i className="icon-bell"></i>
              <span className="badge badge-default"> { notifications.length} </span>
            </a> }
            <ul className="dropdown-menu">
              { notifications.map((itm, i) => <HeaderNotification key={i} {...itm}
                onClick={_=> { notificationClick && notificationClick(itm) }} />)
              }
            </ul>
          </li>

          <li className="dropdown dropdown-user">
            <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
              <img alt="" className="img-circle" src={avatar} />
              <span className="username username-hide-on-mobile"> {displayName} </span>
              <i className="fa fa-angle-down"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-default">
              <li>
                <a href="">
                  <i className="icon-user"></i> My Profile
                </a>
              </li>
            </ul>
          </li>

          <li className="dropdown dropdown-quick-sidebar-toggler">
            <a href="javascript:;" className="dropdown-toggle">
              <i className="icon-logout" onClick={_ => {
                logOutClick && logOutClick()
              }} ></i>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

HeaderAccount.defaultProps = {
  generalInfo: {},
  notificationClick : (itm) => {console.log("goto notify logout", itm)},
  logOutClick : () => {console.log("logout")}
}

export default HeaderAccount
