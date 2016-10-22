import React from 'react'
import BaseContainer from '../../../containers/BaseContainer'
import Table from '../../../components/Table'
import {Button} from '../../../components/UI'
import {alertMessage} from '../../../utils'

const FAKE_DATA = [
  {"username": "userA", "password": ""},
  {"username": "userB", "password": ""},
  {"username": "userC", "password": ""},
  {"username": "userD", "password": ""},
  {"username": "userE", "password": ""},
  {"username": "userF", "password": ""},
  {"username": "userG", "password": ""},
  {"username": "userH", "password": ""},
]

class TableView extends BaseContainer {
  state={
    header: [{
      title:"Username",
      prop: "username"
    }, {
      title:"Password",
      prop:"password"
    }, {
      title:"Action"
    }],
    data: FAKE_DATA
  }

  componentWillMount() {
    this.setState({
      title: "Table View"
    })
  }

  _renderContent() {
    console.log(this.state)
    return <div className="portlet body">
      <Table
        searchableProperties={["username"]}
        hasTopBar={true}
        headers={this.state.header}
        data={this.state.data}
        rowRender={this._renderRow}
        onAddNewHandler={this.onAddNewClick.bind(this)}
      />
    </div>
  }

  onAddNewClick() {
    const newData = this.state.data.slice(0)
    newData.push(
      {"username": "time_" + Date.now(), "password": ""}
    )

    this.setState({
      data: newData
    })
  }

  _renderRow(itm, i) {
    return <tr key={i} className="odd gradeX">
      <td>{itm.username}</td>
      <td>{itm.password}</td>
      <td>
        <div className="btn-group">
          <button className="btn btn-xs green dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false"> Actions
            <i className="fa fa-angle-down"></i>
          </button>
          <ul className="dropdown-menu pull-left" role="menu">
            <li>
              <a href="javascript:;">
                <i className="icon-docs"></i> New Post </a>
            </li>
            <li>
              <a href="javascript:;">
                <i className="icon-tag"></i> New Comment </a>
            </li>
            <li>
              <a href="javascript:;">
                <i className="icon-user"></i> New User </a>
            </li>
            <li className="divider"> </li>
            <li>
              <a href="javascript:;">
                <i className="icon-flag"></i> Comments
                <span className="badge badge-success">4</span>
              </a>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  }
}

export default TableView
