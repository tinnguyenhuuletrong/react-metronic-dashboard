import React from 'react'
import Header from '../../containers/Header'
import Footer from '../../components/Footer'
import SideMenu from '../../containers/SideMenu'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div>
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
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
