import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  useLocation,
  Link
} from 'react-router-dom'
import dbcon from '../dbcon'
import Popularcourse from '../Popularcourse'
import Page404 from '../Page404'
import Loader from '../Loader'

export class Course extends Component {
  constructor (props) {
    super(props)

    this.state = {
      course: {},
      trainer: {},
      loading: true,
      price_old: 2000,
      price_new: 500,
      rating: 4
    }
  }
  componentDidMount () {
    const this1 = this
    const courseid = window.location.pathname.split('/')[2]
    dbcon.fetchcourses(courseid, function (res) {
      if (res !== 'error') this1.setState(res)
      this1.setState({ loading: false })
    })
    if (this.state.trainer.dplink) {
      this.setState({
        trainer: {
          dplink:
            'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kodefork.com%2Fusers%2F%3Fpage%3D3&psig=AOvVaw173J-bF84cU0j9suMONiVN&ust=1584880387278000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPDmk9zJq-gCFQAAAAAdAAAAABAD'
        }
      })
    }
  }
  page404 () {
    return (
      <div className='page404'>
        <div class='mars'></div>
        <img
          src='https://mars-404.templateku.co/img/404.svg'
          class='logo-404'
        />
        <img
          src='https://mars-404.templateku.co/img/meteor.svg'
          class='meteor'
        />
        <p class='title404'>Oh no!!</p>
        <p class='subtitle404'>
          You’re either misspelling the URL <br /> or requesting a page that's
          no longer here.
        </p>
        <div align='center'>
          <a class='btn-back' href='#'>
            Back to previous page
          </a>
        </div>
        <img
          src='https://mars-404.templateku.co/img/astronaut.svg'
          class='astronaut'
        />
        <img
          src='https://mars-404.templateku.co/img/spaceship.svg'
          class='spaceship'
        />
      </div>
    )
  }
  course () {
    return (
      <div>
        <div
          className='courses_details_banner' style={{ backgroundImage: 'url(' + this.state.course.coverimg + ')' }}>
          <div className='overlay_purple course_text_overlay'>
            <div className='container'>
              <div className='row'>
                <div className='col-xl-8'>
                  <div className='course_text'>
                    <h3>{this.state.title}</h3>
                    <br />
                    <h4>
                      <span>{this.state.course.subheading}</span>
                    </h4>
                    <div
                      className='Stars'
                      style={{ rating: 2.3 }}
                      aria-label='Rating of this product is 2.3 out of 5.'
                    ></div>
                    <div className='hours'>
                      <div className='video'>
                        <div className='single_video'>
                          <span>
                            Trainer :{' '}
                            <Link
                              className='trainername'
                              to={'/profile/' + this.state.course.trainerid}
                            >
                              {this.state.trainer.firstname}{' '}
                              {this.state.trainer.lastname}
                            </Link>
                          </span>
                          <br />
                          <span>
                            Last updated: {this.state.course.updatedAt}
                          </span>
                          <br />
                          <i className='fa fa-clock-o'></i>{' '}
                          <span>12 Videos</span>
                          <br />
                          <i className='fa fa-play-circle-o'></i>{' '}
                          <span>9 Hours</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-4'>
                  <div className='courses_sidebar'>
                    <div className='video_thumb'>
                      <img src={this.state.course.previewimg} alt='' />
                      <a
                        className='popup-video'
                        href={this.state.course.previewvid}
                      >
                        <i className='fa fa-play'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='courses_details_info'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-4 col-lg-4'>
                <div className='courses_sidebar'>
                  <div className='sticky_sidebar'>
                    <span className='active'>₹{this.state.course.price}</span>
                    <span className='inactive'>₹{this.state.price_old}</span>
                    <a className='boxed_btn'>Add to Cart</a>
                    <a className='boxed_btn'>Buy Course</a>

                    <div className='course_info'>
                      <h4>{"What you'll get"}</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-8 col-lg-8'>
                <div className='single_courses'></div>
                <div className='outline_courses_info'>
                  <div id='accordion'>
                    <div className='card'>
                      <div className='card-header' id='headingTwo'>
                        <h5 className='mb-0'>
                          <i className='flaticon-question'></i>
                          Description
                        </h5>
                      </div>
                      <div className='card-body'>
                        <p>{this.state.course.description}</p>
                      </div>
                    </div>
                    <div className='card'>
                      <div className='card-header' id='headingTwo'>
                        <h5 className='mb-0'>
                          <i className='flaticon-question'></i>
                          What You'll learn
                        </h5>
                      </div>
                      <div className='card-body'>
                        {this.state.course.learn.map((learn, index) => (
                          <p>>{learn}</p>
                        ))}
                      </div>
                    </div>
                    <div className='card'>
                      <div className='card-header' id='headingTwo'>
                        <h5 className='mb-0'>
                          <i className='flaticon-question'></i> Requirements
                        </h5>
                      </div>
                      <div className='card-body'>
                        {this.state.course.requirement.map((req, index) => (
                          <p>>{req}</p>
                        ))}
                      </div>
                    </div>
                    <div className='author_info'>
                      <div className='auhor_header'>
                        <div className='name'>
                          <img
                            src={this.state.trainer.dplink}
                            alt=''
                            height='60'
                            width='60'
                          />
                          <h3>
                            <Link
                              className='trainername'
                              to={'/profile/' + this.state.course.trainerid}
                            >
                              {this.state.trainer.trainername}
                            </Link>
                          </h3>
                          <p>{this.state.trainer.profession}</p>
                        </div>
                      </div>
                      <p className='text_info'>
                        {this.state.trainer.trainerdesc}
                      </p>
                      <ul>
                        <li>
                          <a>
                            {' '}
                            <i className='fa fa-envelope'></i>{' '}
                          </a>
                        </li>
                        <li>
                          <a>
                            {' '}
                            <i className='fa fa-twitter'></i>{' '}
                          </a>
                        </li>
                        <li>
                          <a>
                            {' '}
                            <i className='ti-linkedin'></i>{' '}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Popularcourse />
      </div>
    )
  }
  render () {
    if (this.state.loading) return <Loader />
    else {
      if (this.state.course.hasOwnProperty('_id')) return this.course()
      else return <Page404 />
    }
  }
}

export default Course
