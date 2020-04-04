import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

export default class Profile_navbar extends Component {
  constructor (props) {
    super(props)

    this.state = props.state
  }

  navbar () {
    if (this.state.permission === 'edit')
      return (
        <section class='et-hero-tabs'>
          <div class='et-hero-tabs-container'>
            <Link class='et-hero-tab' to={'/profile/' + this.state.id + '/'}>
              Profile
            </Link>
            <Link
              class='et-hero-tab'
              to={'/profile/' + this.state.id + '/course'}
            >
              Courses
            </Link>
            <Link
              class='et-hero-tab'
              to={'/profile/' + this.state.id + '/edit'}
            >
              Edit Profile
            </Link>
            <Link
              class='et-hero-tab'
              to={'/profile/' + this.state.id + '/setting'}
            >
              Setting
            </Link>
          </div>
        </section>
      )
      else return (
        <section class='et-hero-tabs'>
          <div class='et-hero-tabs-container'>
            <Link class='et-hero-tab' to={'/profile/' + this.state.id + '/'}>
              Profile
            </Link>
            <Link
              class='et-hero-tab'
              to={'/profile/' + this.state.id + '/course'}
            >
              Courses
            </Link>
          </div>
        </section>
      )
  }

  render () {
    return this.navbar()
  }
}
