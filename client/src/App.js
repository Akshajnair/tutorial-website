import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/Pages/About'
import Home from './components/Pages/Home'
import Courses from './components/Pages/Courses'
import Profile from './components/Pages/Profile'
import Course from './components/Pages/Course'
import Singleblog from './components/Singleblog'
import Latestblog from './components/Latestblog'
import Subscribe from './components/Subscribe'
import dbcon from './components/dbcon'
import Loader from './components/Loader'
import Login from './components/Login'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      baseurl: 'http://localhost:5000',
      profile: {},
      loading: true
    }
  }

  componentDidMount (e) {
    var this1 = this
    dbcon.token(function (response) {
      if (response === 'nodata') console.log('please login')
      else this1.setState({ profile: response })
      this1.setState({ loading: false })
    })
  }

  loginid = id => {
    this.setState({ profile: id })
    console.log(localStorage.getItem('id'))
  }

  render () {
    return (
      <div className='App'>
        <Router>
          <Header
            profile={this.state.profile}
            url={this.state.baseurl}
            loginid={this.loginid}
          />
          <Route
            exact
            path='/'
            render={props => {
              if (this.state.loading) return <Loader />
              else return <Home profile={this.state.profile} />
            }}
          />
          <Route
            path='/login'
            render={props => {
              return <Login />
            }}
          />
          <Route
            path='/profile'
            render={props => {
              return <Profile profile={this.state.profile} />
            }}
          />
          <Route path='/about' component={About} />
          <Route
            exact
            path='/courses'
            render={props => {
              return <Courses />
            }}
          />
          <Route path='/courses/:id' component={Course} />
          <Route
            path='/viewblog'
            render={props => {
              return <Singleblog />
            }}
          />
          <Latestblog />
          <Subscribe />
          <Footer />
        </Router>
      </div>
    )
  }
}

export default App
