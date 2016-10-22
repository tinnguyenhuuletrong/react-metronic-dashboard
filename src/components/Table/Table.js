import React, { Component, PropTypes } from 'react'
import Pagination from '../Pagination'
import classNames  from 'classnames';

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

/* @Table Header

*/
class TableHeader extends Component {
  static propTypes = {

    // Has checkbox
    hasCheckbox: React.PropTypes.bool,

    // HeaderRender
    headers: React.PropTypes.array
  }
  render() {
    const {headers, hasCheckbox} = this.props
    return <thead>
      <tr>
        { hasCheckbox &&  <th>
          <label className="mt-checkbox mt-checkbox-single mt-checkbox-outline">
            <input type="checkbox" className="group-checkable" data-set="#sample_1 .checkboxes" />
            <span></span>
          </label>
        </th> }

        {headers && headers.map((itm,i) => <th key={i} >{itm}</th>)}
      </tr>
    </thead>
  }
}

/* @TableOptions
  Search, Filter Options
*/
class TableOptions extends Component {
  static propTypes = {

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
    const {itemPerPage, filter, itemPerPageChange, searchHandler} = this.props
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
        <div id="sample_1_filter" className="btn-group pull-right">
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
        </div>
      </div>
    </div>
  }
}

/* @TableOptions
  Search, Filter Options
*/
class TablePagging extends Component {
  static propTypes = {
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
    const {pageIndex, totalItems, itemPerPage, pageIndexHandler} = this.props
    const begin = pageIndex * itemPerPage
    const end = itemPerPage > 0 ? Math.min((pageIndex + 1) * itemPerPage - 1, totalItems) : totalItems

    const maxPage = Math.floor(totalItems/itemPerPage)

    return <div className="row">
      <div className="col-md-5 col-sm-5">
        <div className="dataTables_info" id="sample_1_info" role="status" aria-live="polite">Showing {begin} to {end} of {totalItems} records</div>
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

/* @DataTable
*/
class Table extends Component {
  static propTypes = {

    // Top bar enable (Add New and Tools)
    hasTopBar: React.PropTypes.bool,

    // add new handler
    onAddNewHandler: React.PropTypes.func,

    // data
    data: React.PropTypes.array,

    // RowRender
    rowRender: React.PropTypes.func,

    // Has checkbox
    hasCheckbox: React.PropTypes.bool,

    // HeaderRender
    headers: React.PropTypes.array
  }

  state = {
    itemPerPage: -1,
    pageIndex: 0,
    filter: ""
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.data != nextProps.data) {
      console.log("reload...")
      this._filterData(nextProps.data)
    }
  }

  componentWillMount() {
    this.setState({
      _id: "Table_" + Date.now(),
      ...this.props
    })
  }

  componentDidMount() {
    this._filterData()
  }

  render() {
    const {data, rowRender, headers, onAddNewHandler, hasCheckbox, hasTopBar} = this.props
    const {renderData, itemPerPage, filter, pageIndex} = this.state

    return <div>
      {hasTopBar && <TableTop onAddNewHandler={onAddNewHandler} />}
      <TableOptions
        filter={filter}
        itemPerPage={itemPerPage}
        itemPerPageChange={e=>{
          this.setState({
            itemPerPage: +e
          },_ =>{
            this._filterData()
          })

        }}
        searchHandler={e=>{
          this.setState({
            filter: e
          },_ =>{
            this._filterData()
          })
        }}
      />
      <table className="table table-striped table-bordered table-hover table-checkable order-column"
        ref="dataTable">
        <TableHeader headers={headers} hasCheckbox={hasCheckbox}/>
        <tbody>
          {renderData && renderData.map((itm, i) => {
            return rowRender(itm, i)
          })}
        </tbody>
      </table>
      <TablePagging
        totalItems={data.length}
        itemPerPage={itemPerPage}
        pageIndex={pageIndex}
        pageIndexHandler={e => {
          this.setState({
            pageIndex: e
          },_ =>{
            this._filterData()
          })
        }}
      />
    </div>
  }

  _filterData(dataSource) {
    dataSource = dataSource || this.props.data

    // Filter

    // Sort

    // Pagging
    const {itemPerPage, pageIndex} = this.state
    if(this.state.itemPerPage > 0)
      dataSource = dataSource.slice(pageIndex * itemPerPage, pageIndex * itemPerPage + itemPerPage)
    else
      dataSource = dataSource.slice(0)

    this.setState({
      renderData: dataSource
    })
  }
}

Table.defaultProps = {
  enable: true,
}

TableOptions.defaultProps = {
  itemPerPage: -1,
}

export default Table
