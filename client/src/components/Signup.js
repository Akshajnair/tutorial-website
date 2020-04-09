import React, { Component } from 'react'
import dbcon from './dbcon'

export default class Signup extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmpassword: '',
      profession: '',
      description: '',
      website: '',
      facebook: '',
      twitter: '',
      linkedin: '',
      youtube: '',
      dplink: '',
      fieldfirstname: { classname: '', error: null },
      fieldlastname: { classname: '', error: null },
      fieldemail: { classname: '', error: null },
      fieldpassword: { classname: '', error: null },
      fieldpasswordconf: { classname: '', error: null },
      button: 'disabled',
      res: '',
      rpa: ''
    }
    this.checkbox = this.checkbox.bind(this)
    this.step1next = this.step1next.bind(this)
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    if (e.target.name === 'email') {
      this.onemailchange(e.target.value)
    }
  }
  onemailchange (email) {
    const this1 = this
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i
    if (expression.test(String(email).toLowerCase()) && email.length > 5)
      dbcon.emailcheck(email, function (res) {
        if (res === 'exist')
          this1.setState({
            fieldemail: {
              classname: 'omrs-input-danger',
              error: 'email already exist'
            }
          })
        else
          this1.setState({
            fieldemail: { classname: '', error: null }
          })
      })
    else
      this1.setState({
        fieldemail: {
          classname: 'omrs-input-danger',
          error: 'Invalid Email Entered'
        }
      })
  }

  checkbox (e) {
    if (e.target.checked) this.setState({ button: '' })
    else this.setState({ button: 'disabled' })
  }

  step1next () {
    const this1 = this
    //firstname------------------------------
    if (this1.state.firstname.length < 3)
      this1.setState({
        fieldfirstname: {
          classname: 'omrs-input-danger',
          error: 'minimum length is 3'
        }
      })
    else
      this1.setState({
        fieldfirstname: { classname: '', error: null }
      })
    //lastname----------------------------
    if (this1.state.lastname.length < 3)
      this1.setState({
        fieldlastname: {
          classname: 'omrs-input-danger',
          error: 'minimum length is 3'
        }
      })
    else
      this1.setState({
        fieldlastname: { classname: '', error: null }
      })
    //email------------------------------
    this1.onemailchange(this.state.email)
    //password---------------------------
    if (this1.state.password.length < 8)
      this1.setState({
        fieldpassword: {
          classname: 'omrs-input-danger',
          error: 'minimum length is 8'
        }
      })
    else
      this1.setState({
        fieldpassword: { classname: '', error: null }
      })
    //passwordconf-----------------------
    if (this1.state.confirmpassword !== this1.state.password)
      this1.setState({
        fieldpasswordconf: {
          classname: 'omrs-input-danger',
          error: 'Password do not Match'
        }
      })
    else
      this1.setState({
        fieldpasswordconf: { classname: '', error: null }
      })
  }
  step1 () {
    return (
      <div className='step1'>
        <div className='stepintro'>Enter Details to continue</div>

        <div className='omrs-input-group'>
          <label
            className={
              'omrs-input-underlined ' + this.state.fieldfirstname.classname
            }
          >
            <input
              type='text'
              name='firstname'
              value={this.state.firstname}
              onChange={this.onChange}
              required
            />
            <span class='omrs-input-label'>First Name</span>
            <span class='omrs-input-helper'>
              {this.state.fieldfirstname.error}
            </span>
          </label>
        </div>
        <div className='omrs-input-group'>
          <label
            className={
              'omrs-input-underlined ' + this.state.fieldlastname.classname
            }
          >
            <input
              type='text'
              name='lastname'
              value={this.state.lastname}
              onChange={this.onChange}
              required
            />
            <span class='omrs-input-label'>Last Name</span>
            <span class='omrs-input-helper'>
              {this.state.fieldlastname.error}
            </span>
          </label>
        </div>
        <div className='omrs-input-group'>
          <label
            className={
              'omrs-input-underlined ' + this.state.fieldemail.classname
            }
          >
            <input
              type='text'
              name='email'
              value={this.state.email}
              onChange={this.onChange}
              required
            />
            <span class='omrs-input-label'>Email</span>
            <span class='omrs-input-helper'>{this.state.fieldemail.error}</span>
          </label>
        </div>
        <div className='omrs-input-group'>
          <label
            className={
              'omrs-input-underlined ' + this.state.fieldpassword.classname
            }
          >
            <input
              type='password'
              name='password'
              value={this.state.password}
              onChange={this.onChange}
              required
            />
            <span class='omrs-input-label'>Password</span>
            <span class='omrs-input-helper'>
              {this.state.fieldpassword.error}
            </span>
          </label>
        </div>
        <div className='omrs-input-group'>
          <label
            className={
              'omrs-input-underlined ' + this.state.fieldpasswordconf.classname
            }
          >
            <input
              type='password'
              name='confirmpassword'
              value={this.state.confirmpassword}
              onChange={this.onChange}
              required
            />
            <span class='omrs-input-label'>Confirm Password</span>
            <span class='omrs-input-helper'>
              {this.state.fieldpasswordconf.error}
            </span>
          </label>
        </div>
        <div class='checkbox'>
          <input
            type='checkbox'
            id='cbx'
            style={{ display: 'none' }}
            onClick={this.checkbox}
          />
          <label for='cbx' class='check'>
            <svg width='18px' height='18px' viewBox='0 0 18 18'>
              <path d='M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z'></path>
              <polyline points='1 9 7 14 15 4'></polyline>
            </svg>
          </label>
          <div className='privacypolicy'>
            I agree to terms and Privacy Policy
          </div>
        </div>
        <button
          class={'buttonload ' + this.state.button}
          onClick={this.step1next}
          disabled={this.state.button}
        >
          <i class='fa fa-circle-o-notch fa-spin'></i>Next
        </button>
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
