import React, { Component, PropTypes } from 'react'
import Pagination from '../Pagination'
import classNames  from 'classnames';
import {makeRowCompare, makeFuzzyFilter} from '../../utils/text'
/* @Table Header

*/
class TableHeader extends Component {
  static propTypes = {

    // Has checkbox
    hasCheckbox: React.PropTypes.bool,

    // HeaderRender
    headers: React.PropTypes.array,

    // Handle Select
    handleSelect: React.PropTypes.func,
  }

  state = {
    selectedIndex: -1,
    order: 1
  }

  SORT_MAPPING = ["sorting_desc", "sorting_asc"]

  render() {
    const {headers, hasCheckbox, handleSelect} = this.props
    const {selectedIndex, order} = this.state
    return <thead>
      <tr>
        { hasCheckbox &&  <th>
          <label className="mt-checkbox mt-checkbox-single mt-checkbox-outline">
            <input type="checkbox" className="group-checkable" data-set="#sample_1 .checkboxes" />
            <span></span>
          </label>
        </th> }

        {headers && headers.map((itm,i) => <th
          className={selectedIndex == i ? this.SORT_MAPPING[order] : ""}
          onClick={_ => {
            if(itm.prop == null) return;

            let order = this.state.order
            if(selectedIndex == i) {
              order = (order + 1) % 2
            } else {
              order = 1
            }

            this.setState({
              selectedIndex: i,
              order: order
            }, _ => {
              handleSelect && handleSelect(itm.prop, order)
            })

          }}
          key={i}>
          {itm.title}
        </th>)}
      </tr>
    </thead>
  }
}

export default TableHeader
