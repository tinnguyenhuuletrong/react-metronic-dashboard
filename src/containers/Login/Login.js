import { connect } from 'react-redux'
import React, {Component} from 'react'
import BaseContainer from '../BaseContainer'
import {alertMessage} from '../../utils'
import {fakeLogin} from '../../actions/login'
import LogoImg from '../../static/assets/layouts/layout/img/logo-big.png'

class Login extends BaseContainer {

  componentWillMount() {
    this.setState({
      username: "",
      password: "",
      rememberMe: true
    })
  }

  render() {
    const {doLogin} = this.props
    const {username, password, rememberMe} = this.state

    return <div className="login">
      {/* <!-- BEGIN LOGO --> */}
      <div className="logo">
        <a>
          <img src={LogoImg} alt="" />
        </a>
      </div>
      {/* <!-- END LOGO --> */}
      {/* <!-- BEGIN LOGIN --> */}
      <div className="content">
        {/* <!-- BEGIN LOGIN FORM --> */}
        <div className="login-form">
          <h3 className="form-title font-green">Sign In</h3>
          <div id="alert">

          </div>
          <div className="form-group">
            <label className="control-label visible-ie8 visible-ie9">Username</label>
            <input className="form-control form-control-solid placeholder-no-fix"
              type="text" autoComplete="off"
              placeholder="Username"
              name="username"
              value={username}
              onChange={e => {
                this.setState({
                  username: e.target.value
                })
              }}
            /> </div>
          <div className="form-group">
            <label className="control-label visible-ie8 visible-ie9">Password</label>
            <input className="form-control form-control-solid placeholder-no-fix"
              type="password"
              autoComplete="off"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => {
                this.setState({
                  password: e.target.value
                })
              }}
            /> </div>
          <div className="form-actions">
            <button className="btn green uppercase"
              onClick={e => {
                if (username == "" || password == "")
                return alertMessage({
                  message: "Missing Username or Password",
                  type: "error",
                  icon: "error",
                  container: "#alert",
                  focus: false
                })

                if(!doLogin)
                return

                this.showLoading(true)
                doLogin(username, password, rememberMe)
                .then(_ => {
                  this.showLoading(false)
                })
              }}>
              Login
            </button>
            <label className="rememberme check mt-checkbox mt-checkbox-outline">
              <input type="checkbox"
                name="remember"
                value={rememberMe}
                onClick={e => {
                  this.setState({
                    rememberMe: e.target.checked
                  })
                }}
              />Remember
              <span></span>
            </label>
            <a href="javascript:;" id="forget-password" className="forget-password">Forgot Password?</a>
          </div>
          <div className="login-options">
            <h4>Or login with</h4>
            <ul className="social-icons">
              <li>
                <a className="social-icon-color facebook" data-original-title="facebook" href="javascript:;"></a>
              </li>
              <li>
                <a className="social-icon-color twitter" data-original-title="Twitter" href="javascript:;"></a>
              </li>
              <li>
                <a className="social-icon-color googleplus" data-original-title="Goole Plus" href="javascript:;"></a>
              </li>
              <li>
                <a className="social-icon-color linkedin" data-original-title="Linkedin" href="javascript:;"></a>
              </li>
            </ul>
          </div>
          <div className="create-account">
            <p>
              <a href="javascript:;" id="register-btn" className="uppercase">Create an account</a>
            </p>
          </div>
        </div>
        {/* <!-- END LOGIN FORM --> */}
        {/* <!-- BEGIN FORGOT PASSWORD FORM --> */}
        {/* <form className="forget-form" action="index.html" method="post">
          <h3 className="font-green">Forget Password ?</h3>
          <p> Enter your e-mail address below to reset your password. </p>
          <div className="form-group">
          <input className="form-control placeholder-no-fix" type="text" autoComplete="off" placeholder="Email" name="email" /> </div>
          <div className="form-actions">
          <button type="button" id="back-btn" className="btn green btn-outline">Back</button>
          <button type="submit" className="btn btn-success uppercase pull-right">Submit</button>
          </div>
        </form> */}
        {/* <!-- END FORGOT PASSWORD FORM --> */}

      </div>
      <div className="copyright"> 2014 © Metronic. Admin Dashboard Template. </div>

      { this.state.loading && <div className="modal-backdrop fade in"></div> }
    </div>
  }
}

const mapDispatchToProps = (dispatch) => ({
  doLogin: (username, pass, rememberMe) => dispatch(fakeLogin(username, pass, rememberMe)),
  dispatch
})

const mapStateToProps = (state) => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(Login)
