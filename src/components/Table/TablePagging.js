import React, { Component, PropTypes } from 'react'
import Pagination from '../Pagination'
import classNames  from 'classnames';
import {makeRowCompare, makeFuzzyFilter} from '../../utils/text'

/* @TablePagging
  Pagging
*/
class TablePagging extends Component {
  static propTypes = {
    // filter
    filter: React.PropTypes.string,

    // filterTotalItem
    filterTotalItem: React.PropTypes.number,

    // totalItems
    totalItems: React.PropTypes.number,

    // Has itemPerPage
    itemPerPage: React.PropTypes.number,

    // pageIndex
    pageIndex: React.PropTypes.number,

    // HeaderRender
    pageIndexHandler: React.PropTypes.func
  }
  render() {
    const {pageIndex, itemPerPage, pageIndexHandler, filter, filterTotalItem} = this.props
    let {totalItems} = this.props

    if(filter != "")
      totalItems = filterTotalItem

    const begin = pageIndex * itemPerPage
    const end = itemPerPage > 0 ? Math.min((pageIndex + 1) * itemPerPage - 1, totalItems) : totalItems

    const maxPage = Math.floor(totalItems/itemPerPage)

    return <div className="row">
      <div className="col-md-5 col-sm-5">
        <div className="dataTables_info" id="sample_1_info" role="status" aria-live="polite">
          {totalItems > 0 && `Showing ${begin} to ${end} of ${totalItems} records. `}
          {totalItems <= 0 && `Not found data. `}
          {filter != "" && `(filter "${filter}" from ${this.props.totalItems} total records)`}
        </div>
      </div>
      <div className="col-md-7 col-sm-7">
        { itemPerPage > 0 && <div className="btn-group pull-right">
          <Pagination
            activePage={pageIndex + 1}
            itemsCountPerPage={itemPerPage}
            totalItemsCount={totalItems}
            pageRangeDisplayed={5}
            onChange={e => {
              pageIndexHandler && pageIndexHandler(e-1)
            }}/>
        </div>
        }
      </div>
    </div>
  }
}

export default TablePagging
