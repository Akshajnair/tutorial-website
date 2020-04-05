import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Loginico from './Loginico'
import Header_mobile from './Header_mobile'
import dbcon from './dbcon'

export class Header extends Component {
  render () {
    return (
      <div>
        <header>
          <div className='header-area '>
            <div id='sticky-header' className='main-header-area'>
              <div className='container-fluid p-0'>
                <div className='row align-items-center no-gutters'>
                  <div className='col-xl-2 col-lg-2'>
                    <div className='logo-img'>
                      <Link to='/'>
                        <img
                          src={window.location.origin + '/img/loo.png '}
                          alt='AI Skill Labs'
                        />
                      </Link>
                    </div>
                  </div>
                  <div className='col-xl-7 col-lg-7 d-none d-lg-block'>
                    <div className='main-menu  '>
                      <nav>
                        <ul id='navigation'>
                          <li>
                            <Link to='/'>Home</Link>
                          </li>
                          <li>
                            <Link to='/courses'>Courses</Link>
                          </li>
                          <li>
                            <Link to='/about'>About</Link>
                          </li>
                          <li>
                            <a href='#'>
                              pages <i className='ti-angle-down'></i>
                            </a>
                            <ul className='submenu'>
                              <li>
                                <a href='course_details.html'>course details</a>
                              </li>
                              <li>
                                <a href='elements.html'>elements</a>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <a href='#'>
                              blog <i className='ti-angle-down'></i>
                            </a>
                            <ul className='submenu'>
                              <li>
                                <a href='blog.html'>blog</a>
                              </li>
                              <li>
                                <a href='single-blog.html'>single-blog</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='contact.html'>Contact</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className='col-xl-3 col-lg-3 d-none d-lg-block'>
                    <div className='log_chat_area d-flex align-items-center'>
                      <Loginico profile={this.props.profile} />
                    </div>
                  </div>
                  <div className='col-xs-12'>
                    <div className='d-block d-lg-none'>
                      <Header_mobile profile={this.props.profile}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default Header
