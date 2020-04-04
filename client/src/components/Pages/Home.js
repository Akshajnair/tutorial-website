import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Subscribe from '../Subscribe'
import Aboutarea from '../Aboutarea'
import Popularcourse from '../Popularcourse'
import Coursespeciality from '../Coursespeciality'

export class Home extends Component {
  render () {
    return (
      <div>
        <div className='slider_area '>
          <div className='single_slider slider_bg_1'>
            <div className=' d-flex align-items-center justify-content-center overlay_purple'>
              <div className='container'>
                <div className='row align-items-center justify-content-center'>
                  <div className='col-xl-6 col-md-6'>
                    <div className='illastrator_png'>
                      <img src='img/banner/edu_ilastration.png' alt='' />
                    </div>
                  </div>
                  <div className='col-xl-6 col-md-6'>
                    <div className='slider_info'>
                      <h3>
                        Hey! {this.props.profile.firstname}
                        <br />
                        Select Your
                        <br />
                        Favorite Course <br />
                        From Online
                      </h3>
                      <a className='boxed_btn'>Browse Our Courses</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Aboutarea />
        <Popularcourse />
        <Coursespeciality />
      </div>
    )
  }
}

export default Home
