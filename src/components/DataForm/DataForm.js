import React, { Component, PropTypes } from 'react'
import classNames  from 'classnames';

class DataForm extends Component {
  static propTypes = {
    // Item
    item: React.PropTypes.object,

    // body
    bodyRender: React.PropTypes.func,

    // onSubmit handler
    onSubmit: React.PropTypes.func,

    // onCancel handler
    onCancel: React.PropTypes.func,
  }

  state = {
    value: "",
    error: false, //["", "success", "warning", "error"]
  }

  componentWillMount() {
    this.setState({
      _id: "Form_" + Date.now(),
      ...this.props
    })
  }

  componentDidMount() {

  }

  render() {
    const {bodyRender, title, hasSubmit, hasCancel, onSubmit, onCancel} = this.props
    const {item} = this.state
    return <div className="portlet light bordered">
      <div className="portlet-title">
        <div className="caption font-red-sunglo">
          <i className="icon-settings font-red-sunglo"></i>
          <span className="caption-subject bold uppercase"> {title || ""}</span>
        </div>
      </div>
      {/* Debug JSON:  <h4>Data: {JSON.stringify(item)}</h4> */}
      <div className="portlet-body form" >
        <form role="form">
          <div className="form-body">
            {bodyRender && bodyRender({
              item: item,
              binding: this._binding,
            })}
          </div>
          <div className="form-actions noborder">

            {hasSubmit && <button
              type="button"
              className="btn blue"
              onClick={e => {
                onSubmit && onSubmit(item)
              }}>
              Submit
            </button>}

            {hasCancel && <button
              type="button"
              className="btn default"
              onClick={e => {
                onCancel && onCancel()
              }}>
              Cancel
            </button>}

          </div>
        </form>
      </div>
    </div>
  }

  _mapOnChange = (key) => {
    return {
      onValueChange: (val) => {
        const {item} = this.state
        this.setState({
          item: {
            ...item,
            [key]: val
          }
        })
      }
    }
  }

  _mapValue = (key) => {
    const {item} = this.state
    return item[key] || ""
  }

  _binding = (key) => {
    return {
      value: this._mapValue(key),
      ...this._mapOnChange(key)
    }
  }
}

DataForm.defaultProps = {
  enable: true,
  hasSubmit: true,
  hasCancel: true
}

export default DataForm
