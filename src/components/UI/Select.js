import React, { Component, PropTypes } from 'react'
import classNames  from 'classnames';

class Select extends Component {
  static propTypes = {
    // Placeholder text
    placeHolder: React.PropTypes.string,

    // SelectedValue
    options: React.PropTypes.arrayOf(React.PropTypes.shape({
       title: React.PropTypes.string,
       value: React.PropTypes.string
     })),

     // Multi select
     multi: React.PropTypes.bool,

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

  componentDidMount() {
    $(this.refs.selectBox).select2({
      placeholder: this.props.placeholder
    })

    $(this.refs.selectBox).on('change', e => {
        this._onChange($(this.refs.selectBox).val())
    });
  }

  render() {
    const {error, value, _id} = this.state
    const {enable, options, multi, placeHolder} = this.props
    // form-md-floating-label

    return <div className="form-group">
      <label htmlFor={_id}>{placeHolder}</label>
      <select
        ref="selectBox"
        multiple={multi ? "multiple" : ""}
        id={_id}
        value={this.state.value}
        className="form-control select2"
        value={value || ""}
        onChange={e => {
          // this._onChange(e.target.value)
        }}>
        <option value={0}>--- None ---</option>
        {options && options.map((itm,i) => {
          return <option key={i} value={itm.value}>{itm.title}</option>
        })}
      </select>
    </div>
  }

  _onChange = (value) => {
    const {onValueChange} = this.props

    //Todo: Validation, Auto binding
    console.log("Select", value)
    this.setState({
      value: value
    })

    onValueChange && onValueChange(value)
  }
}

Select.defaultProps = {
  enable: true,

}

export default Select
