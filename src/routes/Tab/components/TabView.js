import React from 'react'
import BaseContainer from '../../../containers/BaseContainer'
import {Tab, TextInput} from '../../../components/UI'

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
      name: ""
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
      <div className="row">
        <div className="col-sm-2">
          <TextInput
            placeHolder="Id"
            helpText= "Input your description here...."
            value="01"
            enable={false}
          />
        </div>

        <div className="col-sm-2">
          <TextInput
            icon="envelope-o"
            placeHolder="Name"
            helpText= "Input your name here...."
            onValueChange = {val => {
              this.setState({
                name: val
              })
            }}
          />
        </div>
        <div className="col-sm-2">
          <TextInput
            multi={true}
            placeHolder="Description"
            helpText= "Input your description here...."
          />
        </div>
      </div>
    </div>
  }

  _renderTab2() {
    return <h3>tab 2 content</h3>
  }
}

export default TabView
