import React, { Component, PropTypes } from 'react'
import debounce from 'debounce';
import classNames  from 'classnames';
import {makeRowCompare, makeFuzzyFilter} from '../../utils/text'
import TableTop from './TableTop'
import TableHeader from './TableHeader'
import TableOptions from './TableOptions'
import TablePagging from './TablePagging'

/* @DataTable
*/
class Table extends Component {
  static propTypes = {

    searchableProperties: React.PropTypes.array,

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
    filter: "",
    order: 1,
    selectProp: null,
    filterDataLength: 0
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
    const {data, rowRender, headers, onAddNewHandler, hasCheckbox, hasTopBar, searchableProperties} = this.props
    const {renderData, itemPerPage, filter, pageIndex} = this.state

    return <div>
      {hasTopBar && <TableTop onAddNewHandler={onAddNewHandler} />}
      <TableOptions
        hasSearch={searchableProperties.length > 0}
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

          // Using Debounce to optimize performance
          this.setState({
            filter: e,
            pageIndex: 0
          }, debounce(_=>{
            this._filterData()
          }, 200))
        }}
      />
      <table className="dataTable table table-striped table-bordered table-hover table-checkable order-column"
        ref="dataTable">
        <TableHeader
          headers={headers}
          hasCheckbox={hasCheckbox}
          handleSelect={(column, order) => {
            this.setState({
              selectProp: column,
              order: order
            }, _ => {
              this._filterData()
            })
          }}/>
        <tbody>
          {renderData && renderData.map((itm, i) => {
            return rowRender(itm, i)
          })}
        </tbody>
      </table>
      <TablePagging
        filter={filter}
        filterTotalItem={this.state.filterDataLength || 0}
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
    const {filter, selectProp, order} = this.state
    const {searchableProperties} = this.props

    // Filter
    if(filter != "" && searchableProperties.length > 0){
      const searchFilter = makeFuzzyFilter(filter.toLowerCase(), searchableProperties);
      dataSource = dataSource.filter(itm => searchFilter(itm))

      this.setState({
        filterDataLength: dataSource.length
      })
    }

    // Sort
    if(selectProp != null)
      dataSource = dataSource.sort(makeRowCompare(selectProp, order > 0 ? 1 : -1))

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
  searchableProperties: []
}

export default Table
