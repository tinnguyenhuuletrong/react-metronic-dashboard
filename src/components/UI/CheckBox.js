import React, { Component, PropTypes } from 'react'
import classNames  from 'classnames';

class CheckBox extends Component {
  static propTypes = {
    // Placeholder text
    placeHolder: React.PropTypes.string,

    // OnValueChange handler
    onValueChange : React.PropTypes.func
  }

  state = {
    value: "",
    error: false, //["", "success", "warning", "error"]
  }

  componentWillMount() {
    this.setState({
      _id: "Input_" + Date.now(),
      value: this.props.value
    })
  }

  render() {
    const {error, value, _id} = this.state
    const {enable, placeHolder} = this.props
    // form-md-floating-label

    return <div className={classNames([
      "md-checkbox",
      error ? "has-error" : ""
    ])}>
      <div>

        <input type="checkbox"
          id={_id}
          className="md-check"
          disabled={!enable}
          value={value || false}
          onClick={(event) => {
            this._onChange(event.target.checked)
          }}
        />
        
        <label htmlFor={_id}>
          <span className="inc"></span>
          <span className="check"></span>
          <span className="box"></span> {placeHolder}
        </label>
      </div>
    </div>
  }

  _onChange = (value) => {
    const {onValueChange} = this.props

    //Todo: Validation, Auto binding

    this.setState({
      value: value
    })

    onValueChange && onValueChange(value)
  }
}

CheckBox.defaultProps = {
  enable: true,
}

export default CheckBox
