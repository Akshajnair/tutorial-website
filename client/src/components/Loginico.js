import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import dbcon from './dbcon'

export class Loginico extends Component {
  state={
    logoutload:''
  }
  logouthandler = e => {
    this.setState({logoutload:'fa fa-circle-o-notch fa-spin'})
    e.preventDefault()
    dbcon.logout(function (res) {
      console.log(res)
      window.location=window.location.origin      
    })
  }
  onclickhandel(){
    dbcon.prevlink(window.location.pathname)
    console.log(window.location.pathname)
  }
  login = function () {
    const this1=this
    if (this.props.profile._id)
      return (
        <div className='main-menu'>
          <nav>
            <ul id='navigation'>
              <li>
                <Link
                  to={'/profile/' + this.props.profile._id + '/'}
                  className='login '
                >
                  <i className='flaticon-user'></i>
                  {this.props.profile.firstname}
                </Link>
                <ul className='submenu'>
                  <li>
                    <Link
                      to={'/profile/' + this.props.profile._id + '/'}
                      className='login '
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to='/mycourses' className='login '>
                      My Courses
                    </Link>
                  </li>
                  <li>
                    <a href='' onClick={this.logouthandler}>
                    Logout  <i className={this.state.logoutload}></i>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      )
    else {
      console.log(window.location.pathname)
      return (
        <Link to='/login' className='login' onClick={this1.onclickhandel} profile={"sdfgsdfg"} style={{color: 'white'}}>
          <i className='flaticon-user'></i>
          Login / Signup
        </Link>
      )
    }
  }
  render () {
    return this.login()
  }
}

export default Loginico
