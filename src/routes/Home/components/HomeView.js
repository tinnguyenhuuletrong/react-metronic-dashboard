import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import {setLoading, alertMessage} from '../../../utils'

export const HomeView = () => (
  <div>
    <h1 className="page-title"> Home
    </h1>
    <img
      alt='This is a duck, because Redux!'
      className='duck'
      src={DuckImage}
      onClick={_=>{
        setLoading(true)
        setTimeout(function () {
          setLoading(false)
          alertMessage()
        }, 1000);
      }}
    />
  </div>
)

export default HomeView
