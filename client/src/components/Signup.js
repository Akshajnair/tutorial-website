import React, { Component } from 'react'

export default class Signup extends Component {
  constructor (props) {
    super(props)
    this.state = {
      profile: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmpassword: '',
        loginemail: '',
        loginpassword: ''
      },
      field: {
        firstname: { classname: 'signupinput', error: null },
        lastname: { classname: 'signupinput', error: null },
        email: { classname: 'signupinput', error: null },
        password: { classname: 'signupinput', error: null },
        passwordconf: { classname: 'signupinput', error: null }
      },
      res: '',
      rpa: ''
    }
  }
  onChange = e => {
    this.setState({ profile: { [e.target.name]: e.target.value } })
  }
  step1 () {
    return (
      <div className='step1'>
        <div className='stepintro'>Enter Details to continue</div>
        <input
          className={this.state.field.firstname.classname}
          type='text'
          placeholder='First Name'
          name='firstname'
          value={this.state.firstname}
          onChange={this.onChange}
          required
        />
        <p className='inputerror'> {this.state.field.firstname.error}</p>
        <input
          className={this.state.field.lastname.classname}
          type='text'
          placeholder='Last Name'
          name='lastname'
          value={this.state.lastname}
          onChange={this.onChange}
          required
        />
        <p className='inputerror'> {this.state.field.lastname.error}</p>
        <input
          className={this.state.field.email.classname}
          type='email'
          placeholder='Email'
          name='email'
          value={this.state.email}
          onChange={this.onChange}
          required
        />
        <p className='inputerror'> {this.state.field.email.error}</p>
        <input
          className={this.state.field.password.classname}
          type='password'
          placeholder='Password'
          name='password'
          value={this.state.password}
          onChange={this.onChange}
          required
        />
        <p className='inputerror'> {this.state.field.password.error}</p>
        <input
          className={this.state.field.passwordconf.classname}
          type='Password'
          placeholder='Confirm password'
          name='confirmpassword'
          value={this.state.confirmpassword}
          onChange={this.onChange}
          required
        />
        <p className='inputerror'> {this.state.field.passwordconf.error}</p>
        <div class='checkbox'>
          <label>
            <input
              class="checkbox-inline"
              type='checkbox'
              placeholder='Confirm password'
              name='confirmpassword'
              value={this.state.confirmpassword}
              onChange={this.onChange}
              text='dfgdfg'
              required
            />
            I agree to terms and Privacy Policy
          </label>
        </div>
      </div>
    )
  }
  render () {
    return (
      <div className='slider_area '>
        <div className='single_slider slider_bg_1'>
          <div className=' d-flex align-items-center justify-content-center overlay_purple'>
            <div className='container'>
              <div className='signupform'>
                <div className='create'>Create Your Account</div>
                {this.step1()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
