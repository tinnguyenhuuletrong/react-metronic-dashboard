import { connect } from 'react-redux'
import React, { Component } from 'react'
import Header from '../../containers/Header'
import Footer from '../../components/Footer'
import SideMenu from '../../containers/SideMenu'
import Login from '../../containers/Login'

export class CoreLayout extends Component {

  render() {
    const {generalInfo, children} = this.props

    return <div>
      {!generalInfo.accessToken && <div>
        <Login/>
      </div>}
      {generalInfo.accessToken && <div>
        <Header/>
        <div className="page-container">
          <SideMenu/>
          <div className="page-content-wrapper">
            <div className="page-content">
              {children}
            </div>
          </div>
          <Footer/>
        </div>
      </div>
      }
    </div>
  }
}


CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  dispatch
})

const mapStateToProps = (state) => ({
  generalInfo : state.generalInfo
})


export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout)
