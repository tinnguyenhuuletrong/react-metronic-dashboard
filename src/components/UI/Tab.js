import React, { Component, PropTypes } from 'react'
import classNames  from 'classnames';

/* @TabTitle
*/
class TabTitle extends Component {
  render() {
    const {active, tabId, title, onActiveChange} = this.props

    return <li className={active ? "active" : ""}>
      <a href={tabId} data-toggle="tab" onClick={_ => {onActiveChange && onActiveChange(tabId)}} > {title} </a>
    </li>
  }
}

/* @TabPanel
*/
class TabPanel extends Component {

  render() {
    const {active, tabId, render} = this.props
    return <div className={classNames(["tab-pane", active ? "active": ""])} id={tabId}>
      {render && render()}
    </div>
  }
}

/* @Tab
*/
class Tab extends Component {
  static propTypes = {
    
    // Active index
    activeIndex: React.PropTypes.number,

    // Tab Data
    tabs: React.PropTypes.arrayOf(React.PropTypes.shape({
       title: React.PropTypes.string,
       render: React.PropTypes.func
     })),
  }

  state = {
    activeIndex: 0
  }

  componentWillMount() {
    this.setState({
      ...this.props
    })
  }

  render() {
    const {tabs} = this.props
    const activeItem = tabs[this.state.activeIndex]
    return <div className="tabbable-line">
      <ul className="nav nav-tabs ">
        {tabs && tabs.map((itm, i) => {
          return <TabTitle key={i}
            tabId={i}
            onActiveChange={this._onActiveChange}
            active={ i == this.state.activeIndex }
            {...itm}/>
        })}
      </ul>
      <div className="tab-content">
        {activeItem && <TabPanel tabId={this.state.activeIndex} {...activeItem} active={true}/>}
      </div>
    </div>
  }

  _onActiveChange = (index) => {
    console.log("state change", index)
    this.setState({
      activeIndex: index
    })
  }
}

Tab.defaultProps = {

}

export default Tab
