import React from 'react'
import BaseContainer from '../../../containers/BaseContainer'
import {Tab, TextInput, CheckBox, RadioGroup} from '../../../components/UI'

const TABS_DATA = [{
  title: "Basic UI Comps",
  render: () => {return <h3> default tab1 </h3>}
},{
  title: "Form Binding",
  render: () => {return <h3> default tab2 </h3>}
}]

class TabView extends BaseContainer {
  componentWillMount() {
    this.setState({
      title: "Tab & UI Components",
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
    const {name, gen} = this.state

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

        <div className="col-sm-2">
          <CheckBox
            placeHolder="Is SuperMan"
          />
        </div>

        <div className="col-sm-2">
          <RadioGroup
            placeHolder="Sex"
            options={[{title:"Male", value: "male"},{title:"Female", value: "female"}]}
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
