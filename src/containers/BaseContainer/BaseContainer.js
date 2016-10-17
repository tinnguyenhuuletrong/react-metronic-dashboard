import React, { Component, PropTypes } from 'react'
import { IndexLink, Link } from 'react-router'
import { connect } from 'react-redux'
import classNames  from 'classnames';
import { setLoading } from '../../utils'
import { ModalForm } from '../../components/Modal'

class BreadcrumbItem extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    route: React.PropTypes.string.isRequired,
  }

  render() {
    const {title, route} = this.props
    return <li>
      <Link to={route} >{title}</Link>
      <i className="fa fa-circle"></i>
    </li>
  }
}

class BaseContainer extends Component {
  state = {
    title: "",
    subTitle: "",
    breadcrumbs: [],
    loading: false,
  }

  constructor(props) {
      super(props);
      this.state = Object.assign(this.state,{
        ...this.props
      })
      console.log(this.state)
  }

  render () {

    return <div>
      {this._renderPageBar()}
      {this._renderTitle()}
      <div className="row">
        <div className="portlet light bordered">
          {this._renderContent()}
        </div>
      </div>

      <ModalForm ref="modalDialog"/>

      { this.state.loading && <div className="modal-backdrop fade in"></div> }
    </div>
  }

  showLoading(val) {
    setLoading(val)
    this.setState({
      loading: val
    })
  }

  showDialog(options) {
    this.refs.modalDialog.show({
      title: options.title || "Dialog",
      content: options.content || this._renderDialog,
      data: options.data,
      onConfirm: options.onConfirm
    })
  }

  //--------------------------------------------------------------------------//
  //  Virual Render
  //--------------------------------------------------------------------------//
  _renderPageBar() {
    const {title, subTitle, breadcrumbs} = this.state
    return <div className="page-bar">
      { breadcrumbs && breadcrumbs.length > 0 &&
        <ul className="page-breadcrumb">
          { breadcrumbs && breadcrumbs.map(itm => (
            <BreadcrumbItem {...itm} />
          ))}
          <li>
            <span>{title}</span>
          </li>
        </ul>
      }
    </div>
  }

  _renderTitle() {
    const {title, subTitle} = this.state
    return <h1 className="page-title">
      {title}
      <small>{subTitle}</small>
    </h1>
  }

  _renderContent() {

  }

  _renderDialog(data) {

  }
}

//--------------------------------------------------------------------------//
//  Redux Binding
//--------------------------------------------------------------------------//

export default BaseContainer
