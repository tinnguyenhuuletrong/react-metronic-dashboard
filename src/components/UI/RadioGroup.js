import React, { Component, PropTypes } from 'react'
import classNames  from 'classnames';

class RadioGroup extends Component {
  static propTypes = {
    // Placeholder text
    placeHolder: React.PropTypes.string,

    // SelectedValue
    options: React.PropTypes.arrayOf(React.PropTypes.shape({
       title: React.PropTypes.string,
       value: React.PropTypes.string
     })),

     // Inline display
     inline: React.PropTypes.bool,

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
    const {enable, options, inline, placeHolder} = this.props
    // form-md-floating-label

    return <div className={classNames([
      "form-group form-md-radios",
      error ? "has-error" : ""
    ])}>
      <label>{placeHolder}</label>
      <div className={ inline ? "md-radio-inline" : "md-radio-list"}>
        {options && options.map((itm,i) => {
          return <div key={i} className="md-radio">
            <input
              type="radio"
              id={_id + i}
              checked={itm.value == this.state.value}
              className="md-radiobtn"
              onClick={(event) => {
                this._onChange(itm.value)
              }}
            />
            <label htmlFor={_id + i}>
              <span className="inc"></span>
              <span className="check"></span>
              <span className="box"></span> {itm.title} </label>
          </div>
        })}
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

RadioGroup.defaultProps = {
  enable: true,

}

export default RadioGroup
