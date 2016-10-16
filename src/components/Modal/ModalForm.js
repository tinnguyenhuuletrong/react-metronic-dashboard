import React, { Component, PropTypes } from 'react'

class ModalForm extends Component {
  state = {
      title: "",
      content: null,
      data: {},
      isShown: false,
      onConfirm: null
  }

  constructor(props) {
    super(props)
    this.state = Object.assign(this.state, {...props})
  }

  show(options) {
    $(this.refs.modalDialog).modal("show")
    this.setState({
      title: options.title || "Dialog",
      content: options.content,
      data: options.data || {},
      isShown: true,
      onConfirm: options.onConfirm,
    })
  }

  hide() {
    $(this.refs.modalDialog).modal("hide")
    this.setState({
      title: null,
      content: null,
      data: null,
      isShown: false,
      onConfirm: null,
    })
  }

  render() {
    const {isShown, content, title, data, onClose, onConfirm} = this.state

    return <div ref="modalDialog" className="modal fade" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={_=>{
              this.hide()
            }}>

            </button>
            <h4 className="modal-title">{title}</h4>
          </div>
          <div className="modal-body">
            <div className="scroller" data-always-visible="1" data-rail-visible1="1">
              {content && content(data)}
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" data-dismiss="modal" className="btn dark btn-outline" onClick={_=>{
              this.hide()
            }}>
              Close
            </button>
            <button type="button" className="btn green" onClick={_ => {
              onConfirm && onConfirm()
              this.hide()
            }} >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  }
}
export default ModalForm
