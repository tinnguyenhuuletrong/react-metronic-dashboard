import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { IndexLink, Link } from 'react-router'
import classNames  from 'classnames';
import sideMenuConfigs from '../../configs/sideMenuConfig'

/* @ SideMenuItem Components

*/
class SideMenuItem extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    route: React.PropTypes.string.isRequired,
  }

  render () {
    const {currentPath, route, title} = this.props
    const active = currentPath == route
    const activeStyles = active ? ["active"] : []

    return <li className={classNames("nav-item", ...activeStyles)} >
      <Link to={route} className="nav-link">
        <span className="title">{title}</span>
      </Link>
    </li>
  }
}

/* @ GroupSideMenu Components

*/
class GroupSideMenu extends Component {
  static propTypes = {
    title : PropTypes.string,
    childs: React.PropTypes.arrayOf(React.PropTypes.shape({
       active: PropTypes.bool,
       title: React.PropTypes.string,
       route: React.PropTypes.string
     }))
  }

  render () {
    const {title, currentPath, childs} = this.props
    const active = childs && childs.find(itm => itm.route == currentPath) != null
    const icon = this.props.icon || "icon-diamond"

    const activeStyles = active ? ["start", "active", "open"] : []

    return <li className={classNames("nav-item", ...activeStyles)} >
      <a href="javascript:;" className="nav-link nav-toggle">
        <i className={classNames(icon)}></i>
        <span className="title">{title}</span>
        <span className="arrow"></span>
        {active && <span className="selected"></span> }
      </a>
      <ul className="sub-menu">
        {childs && childs.length && childs.map((itm,i) => {
          return <SideMenuItem currentPath={currentPath} key={i} {...itm} />
        })}
      </ul>
    </li>

  }
}

class SideMenu extends Component {
  static propTypes = {
    items: React.PropTypes.array
  }

  render () {
    const currentPath = this.props.location.pathname
    const items = this.props.items

    return (
      <div className="page-sidebar-wrapper">
        <div className="page-sidebar navbar-collapse collapse">
          <ul className="page-sidebar-menu  page-header-fixed " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200" style={{"paddingTop": "20px"}}>
            <li className="sidebar-toggler-wrapper hide">
              <div className="sidebar-toggler">
                <span></span>
              </div>
            </li>
            {items && items.map((itm,i) => {
              return <GroupSideMenu
                key={i}
                title={itm.groupTitle}
                currentPath={currentPath}
                childs={itm.items}
              />
            })}
          </ul>
        </div>
      </div>
    )
  }
}

SideMenu.defaultProps = sideMenuConfigs

const mapDispatchToProps = (dispatch) => ({
  dispatch
})

const mapStateToProps = (state) => ({
  location : state.location
})

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)
