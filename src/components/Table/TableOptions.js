import React, { Component, PropTypes } from 'react'
import Pagination from '../Pagination'
import classNames  from 'classnames';
import {makeRowCompare, makeFuzzyFilter} from '../../utils/text'

/* @TableOptions
  Search, Filter Options
*/
class TableOptions extends Component {
  static propTypes = {
    // Has Search
    hasSearch: React.PropTypes.bool,

    // Filter value
    filter: React.PropTypes.string,

    // Has itemPerPage
    itemPerPage: React.PropTypes.number,

    // itemPerPageChange
    itemPerPageChange: React.PropTypes.func,

    // HeaderRender
    searchHandler: React.PropTypes.func
  }
  render() {
    const {itemPerPage, filter, itemPerPageChange, searchHandler, hasSearch} = this.props
    return <div className="row">
      <div className="col-md-6 col-sm-6">
        <div className="dataTables_length" id="sample_1_length">
          <label>
            Show
            <select
              value={itemPerPage}
              onChange={e => {
                itemPerPageChange && itemPerPageChange(e.target.value)
              }}
              name="sample_1_length"
              aria-controls="sample_1"
              className="form-control input-sm input-xsmall input-inline">
              <option value="5">5</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="-1">All</option>
            </select>
          </label>
        </div>
      </div>
      <div className="col-md-6 col-sm-6">
        {hasSearch && <div id="sample_1_filter" className="btn-group pull-right">
          <label>Search:
            <input
              type="search"
              className="form-control input-sm input-small input-inline"
              placeholder=""
              aria-controls="sample_1"
              value={filter}
              onChange={e => {
                searchHandler && searchHandler(e.target.value)
              }}
            />

          </label>
        </div> }
      </div>
    </div>
  }
}

TableOptions.defaultProps = {
  itemPerPage: -1,
}
export default TableOptions
