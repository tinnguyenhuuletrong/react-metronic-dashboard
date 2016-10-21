import React, { Component, PropTypes } from 'react'
import classNames  from 'classnames';

class TextInput extends Component {
  static propTypes = {
    // Multi
    multi: React.PropTypes.bool,

    // Input Type
    type: React.PropTypes.string,

    // Placeholder text
    placeHolder: React.PropTypes.string,

    //Help text
    helpText: React.PropTypes.string,

    //icon
    icon: React.PropTypes.string,

    //enable
    enable: React.PropTypes.bool,

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
    const {type, multi, enable, icon, helpText, placeHolder} = this.props
    const InputTag = multi ? "textarea" : "input"

    //form-md-floating-label
    return <div className={classNames([
      "form-group form-md-line-input",
      error ? "has-error" : ""
    ])}>
      <div className={icon ? "input-icon right" : ''} >

        <InputTag type={type}
          id={_id}
          className="form-control"
          readOnly={!enable}
          value={value || ""}
          onChange={(event) => {
            this._onChange(event.target.value)
          }}
        />

        { placeHolder && <label htmlFor={_id}>{placeHolder}</label> }
        { helpText && <span className="help-block">{helpText}</span> }
        { icon && <i className={classNames(["fa", "fa-" + icon])}></i>}
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

TextInput.defaultProps = {
  enable: true,
  type: "text"
}

export default TextInput
