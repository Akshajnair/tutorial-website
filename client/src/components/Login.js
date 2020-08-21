import React, { Component } from 'react'
import dbcon from './dbcon'

export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmpassword: '',
      loginemail: '',
      loginpassword: '',
      res: '',
      rpa: ''
    }
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onloginhandler = e => {
    var this1 = this
    e.preventDefault()
    dbcon.login(
      { email: this.state.loginemail, password: this.state.loginpassword },
      function (response) {
        if (response == 'wrong') {
          this1.setState({ res: 'wrong email and password combination' })
        } else window.location = '/'
      }
    )
  }
  signup(){
    window.location=window.location.origin+'/signup'
  }

  render () {
    return (
      <div className='slider_area '>
        <div className='single_slider slider_bg_1'>
          <div className=' d-flex align-items-center justify-content-center overlay_purple'>
            <div
              className={'logincontainer ' + this.state.rpa}
              id='logincontainer'
            >
              <div className='form-container sign-up-container'>
                <form onSubmit={this.onsubmithandler}>
                  <h1>Create Account</h1>
                  <div className='social-container'>
                    <a href='#' className='social'>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href='#' className='social'>
                      <i className='fab fa-google-plus-g'></i>
                    </a>
                    <a href='#' className='social'>
                      <i className='fab fa-linkedin-in'></i>
                    </a>
                  </div>
                  <span>or use your email for registration</span>
                  <input
                    type='text'
                    placeholder='First Name'
                    name='firstname'
                    value={this.state.firstname}
                    onChange={this.onChange}
                    required
                  />
                  <input
                    type='text'
                    placeholder='Last Name'
                    name='lastname'
                    value={this.state.lastname}
                    onChange={this.onChange}
                    required
                  />
                  <input
                    type='email'
                    placeholder='Email'
                    name='email'
                    value={this.state.email}
                    onChange={this.onChange}
                    required
                  />
                  <input
                    type='password'
                    placeholder='Password'
                    name='password'
                    value={this.state.password}
                    onChange={this.onChange}
                    required
                  />
                  <input
                    type='Password'
                    placeholder='Confirm password'
                    name='confirmpassword'
                    value={this.state.confirmpassword}
                    onChange={this.onChange}
                    required
                  />
                  <h5 style={{ color: 'red' }}>{this.state.res}</h5>
                  <button type='submit'>Sign Up</button>
                </form>
              </div>
              <div className='form-container sign-in-container'>
                <form onSubmit={this.onloginhandler}>
                  <h1>Sign in</h1>
                  <div className='social-container'>
                    <a href='#' className='social'>
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href='#' className='social'>
                      <i className='fab fa-google-plus-g'></i>
                    </a>
                    <a href='#' className='social'>
                      <i className='fab fa-linkedin-in'></i>
                    </a>
                  </div>
                  <span>or use your account</span>
                  <input
                    type='email'
                    name='loginemail'
                    placeholder='Enter email'
                    value={this.state.loginemail}
                    onChange={this.onChange}
                  />
                  <input
                    type='password'
                    name='loginpassword'
                    placeholder='Password'
                    value={this.state.loginpassword}
                    onChange={this.onChange}
                  />
                  <a href='#'>Forgot your password?</a>
                  <h5 style={{ color: 'red' }}>{this.state.res}</h5>
                  <button type='submit'>Sign In</button>
                </form>
              </div>
              <div className='overlay-container'>
                <div className='overlay'>
                  <div className='overlay-panel overlay-left'>
                    <h1>Welcome Back!</h1>
                    <p>
                      To keep connected with us please login with your personal
                      info
                    </p>
                    <button className='ghost' onClick={this.overlayoff}>
                      Sign In
                    </button>
                  </div>
                  <div className='overlay-panel overlay-right'>
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button className='ghost' onClick={this.signup}>
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
