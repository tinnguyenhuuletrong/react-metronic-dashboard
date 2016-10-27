import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import Logo from '../../components/Logo'
import HeaderAccount from './HeaderAccount'

class Header extends Component {

  render () {
    return (
      <div className="page-header navbar navbar-fixed-top">
        <div className="page-header-inner ">
            <Logo/>
            <a href="javascript:;" className="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
                <span></span>
            </a>
            <HeaderAccount {...this.props}/>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  notificationClick: () => {},
  logOutClick: () => {},
  dispatch
})

const mapStateToProps = (state) => ({
  generalInfo : state.generalInfo
})


export default connect(mapStateToProps, mapDispatchToProps)(Header)
