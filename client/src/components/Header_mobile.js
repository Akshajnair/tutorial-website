import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Loginico from './Loginico'

export default class Header_mobile extends Component {
  render () {
    return (
      <div className='header_mobile'>
        <nav>
          <input
            class='menu__checkbox'
            type='checkbox'
            role='Menu'
            aria-label='Menu'
            aria-controls='navigation'
            aria-haspopup='true'
            id='menu'
          />
          <label class='menu__icon' for='menu'>
            <span class='hamburger'></span>
          </label>
          <ul class='menu' role='menuitem'>
            <li>
              <Loginico profile={this.props.profile} />
            </li>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>Courses</Link>
            </li>
            <li>
              <a href='blog.html'>blog</a>
            </li>
            <li>
              <a href='contact.html'>Contact</a>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
