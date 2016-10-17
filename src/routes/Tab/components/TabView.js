import React from 'react'
import BaseContainer from '../../../containers/BaseContainer'
import {Tab} from '../../../components/UI'

const TABS_DATA = [{
  title: "Tab1",
  render: () => {return <h3> default tab1 </h3>}
},{
  title: "Tab2",
  render: () => {return <h3> default tab2 </h3>}
}]

class TabView extends BaseContainer {
  componentWillMount() {
    this.setState({
      title: "Tabs",
      name: "[your name]"
    })

    // Switch contex for render methods
    TABS_DATA[0].render = () => this._renderTab1()
    TABS_DATA[1].render = () => this._renderTab2()
  }

  _renderContent() {
    return <div className="portlet body">
      <div className="row">
        <Tab tabs={TABS_DATA} />
      </div>
    </div>
  }

  //--------------------------------------------------------------------//
  //  Tab Content Renderer
  //--------------------------------------------------------------------//
  _renderTab1() {
    const {name} = this.state

    return <div>
      <h3>My Name Is: {name}</h3>
      <input type="text" className="form-control"
        value={name}
        onChange={(event) => {
          this.setState({
            name: event.target.value
          })
        }}
      />
    </div>
  }

  _renderTab2() {
    return <h3>tab 2 content</h3>
  }
}

export default TabView
