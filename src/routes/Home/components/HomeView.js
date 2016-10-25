import React from 'react'
import DuckImage from '../assets/Dragon.jpg'
import BaseContainer from '../../../containers/BaseContainer'
import {Button} from '../../../components/UI'
import {alertMessage} from '../../../utils'

class HomeView extends BaseContainer {
  componentWillMount() {
    this.setState({
      title: "Home"
    })
  }

  _renderContent() {
    console.log(this.state)
    return <div className="portlet body">
      <div className="row">
        <div className="col-xs-2">
          <Button onClick={_=>{
            this.showLoading(true)
            setTimeout(() => {
              this.showLoading(false)
              alertMessage()
            }, 1000);
          }}>
            Show Loading
          </Button>
        </div>

        <div className="col-xs-1">
          <Button
            type="info"
            enable={true}
            icon="bullhorn"
            block={true}
            onClick={_=>{
              this.showDialog({
                title: "Dialog",
                data: {
                  "name" : "TTin"
                },
                content: (data) => `My name is ${data.name}, Hello There`,
                onConfirm: () =>{
                  alertMessage()
                }
              })
            }}>

          </Button>
        </div>

      </div>

      <img
        alt='This is a duck, because Redux!'
        className='duck'
        src={DuckImage}
        onClick={_=>{
        }}
      />
    </div>
  }
}

export default HomeView
