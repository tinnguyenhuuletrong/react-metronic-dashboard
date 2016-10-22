import React, { Component, PropTypes } from 'react'
import Pagination from '../Pagination'
import classNames  from 'classnames';
import {makeRowCompare, makeFuzzyFilter} from '../../utils/text'

/* @Table Top Button
  AddNew, Actions
*/
class TableTop extends Component {
  static propTypes = {

    // add new handler
    onAddNewHandler: React.PropTypes.func,
  }

  render() {
    const {onAddNewHandler} = this.props

    return <div className="table-toolbar">
      <div className="row">
        <div className="col-md-6">
          <div className="btn-group">
            <button
              id="sample_editable_1_new"
              className="btn sbold green"
              onClick={_ => {
                onAddNewHandler && onAddNewHandler()
              }}
            > Add New
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="btn-group pull-right">
            <button className="btn green  btn-outline dropdown-toggle" data-toggle="dropdown">Tools
              <i className="fa fa-angle-down"></i>
            </button>
            <ul className="dropdown-menu pull-right">
              <li>
                <a href="javascript:;">
                  <i className="fa fa-print"></i> Print </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i className="fa fa-file-pdf-o"></i> Save as PDF </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i className="fa fa-file-excel-o"></i> Export to Excel </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  }
}

export default TableTop
