import React, { Component } from 'react'

export class Popularcourse extends Component {
  render () {
    return (
      <div className='popular_courses'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='section_title text-center mb-100'>
                <h3>Popular Courses</h3>
                <p>
                  Your domain control panel is designed for ease-of-use and{' '}
                  <br /> allows for all aspects of your domains.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='course_nav'>
                <nav>
                  <ul className='nav' id='myTab' role='tablist'>
                    <li className='nav-item'>
                      <a
                        className='nav-link active'
                        id='home-tab'
                        data-toggle='tab'
                        href='#home'
                        role='tab'
                        aria-controls='home'
                        aria-selected='true'
                      >
                        All Courses
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        className='nav-link'
                        id='profile-tab'
                        data-toggle='tab'
                        href='#profile'
                        role='tab'
                        aria-controls='profile'
                        aria-selected='false'
                      >
                        Photoshop
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        className='nav-link'
                        id='contact-tab'
                        data-toggle='tab'
                        href='#contact'
                        role='tab'
                        aria-controls='contact'
                        aria-selected='false'
                      >
                        UI/UX
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        className='nav-link'
                        id='design-tab'
                        data-toggle='tab'
                        href='#design'
                        role='tab'
                        aria-controls='design'
                        aria-selected='false'
                      >
                        Web Design
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        className='nav-link'
                        id='Web-tab'
                        data-toggle='tab'
                        href='#Web'
                        role='tab'
                        aria-controls='design'
                        aria-selected='false'
                      >
                        Web dev
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        className='nav-link'
                        id='Web-tab1'
                        data-toggle='tab'
                        href='#Web1'
                        role='tab'
                        aria-controls='design'
                        aria-selected='false'
                      >
                        Wordpress
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        className='nav-link'
                        id='Web-tab11'
                        data-toggle='tab'
                        href='#Web11'
                        role='tab'
                        aria-controls='design'
                        aria-selected='false'
                      >
                        Adobe XD
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        className='nav-link'
                        id='Adobe-XD-tab8'
                        data-toggle='tab'
                        href='#Adobe-XD8'
                        role='tab'
                        aria-controls='design'
                        aria-selected='false'
                      >
                        Sketch App
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        className='nav-link'
                        id='Adobe-XD-tab9'
                        data-toggle='tab'
                        href='#Adobe-XD9'
                        role='tab'
                        aria-controls='design'
                        aria-selected='false'
                      >
                        Illustrator
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className='all_courses'>
          <div className='container'>
            <div className='tab-content' id='myTabContent'>
              <div
                className='tab-pane fade show active'
                id='home'
                role='tabpanel'
                aria-labelledby='home-tab'
              >
                <div className='row'>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/1.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Photoshop</span>
                        <h3>
                          <a>
                            Mobile App design step by step <br />
                            from beginner
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/2.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Adobe XD</span>
                        <h3>
                          <a>UI/UX design with Adobe XD with Anderson</a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/3.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Wordpress</span>
                        <h3>
                          <a>
                            Wordpress theme development <br />
                            from scratch
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/4.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Photoshop</span>
                        <h3>
                          <a>
                            Mobile App design step by step <br />
                            from beginner
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <img src='img/courses/5.png' alt='' />
                      </div>
                      <div className='courses_info'>
                        <span>UI/UX</span>
                        <h3>
                          <a>
                            How to complete user research <br />
                            and make work flow
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/6.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Wordpress</span>
                        <h3>
                          <a>
                            Commitment to dedicated <br />
                            Support
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-12'>
                    <div className='more_courses text-center'>
                      <a className='boxed_btn_rev'>More Courses</a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='profile'
                role='tabpanel'
                aria-labelledby='profile-tab'
              >
                <div className='row'>
                  <div className='col-xl-4 col-lg-4 col-md-6  col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/1.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Photoshop</span>
                        <h3>
                          <a>
                            Mobile App design step by step <br />
                            from beginner
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/2.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Adobe XD</span>
                        <h3>
                          <a>UI/UX design with Adobe XD with Anderson</a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/3.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Wordpress</span>
                        <h3>
                          <a>
                            Wordpress theme development <br />
                            from scratch
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/4.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Photoshop</span>
                        <h3>
                          <a>
                            Mobile App design step by step <br />
                            from beginner
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <img src='img/courses/5.png' alt='' />
                      </div>
                      <div className='courses_info'>
                        <span>UI/UX</span>
                        <h3>
                          <a>
                            How to complete user research <br />
                            and make work flow
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/6.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Wordpress</span>
                        <h3>
                          <a>
                            Commitment to dedicated <br />
                            Support
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-12'>
                    <div className='more_courses text-center'>
                      <a className='boxed_btn_rev'>More Courses</a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='contact'
                role='tabpanel'
                aria-labelledby='contact-tab'
              >
                <div className='row'>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/1.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Photoshop</span>
                        <h3>
                          <a>
                            Mobile App design step by step <br />
                            from beginner
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/2.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Adobe XD</span>
                        <h3>
                          <a>UI/UX design with Adobe XD with Anderson</a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/3.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Wordpress</span>
                        <h3>
                          <a>
                            Wordpress theme development <br />
                            from scratch
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/4.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Photoshop</span>
                        <h3>
                          <a>
                            Mobile App design step by step <br />
                            from beginner
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <img src='img/courses/5.png' alt='' />
                      </div>
                      <div className='courses_info'>
                        <span>UI/UX</span>
                        <h3>
                          <a>
                            How to complete user research <br />
                            and make work flow
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/6.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Wordpress</span>
                        <h3>
                          <a>
                            Commitment to dedicated <br />
                            Support
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-12'>
                    <div className='more_courses text-center'>
                      <a className='boxed_btn_rev'>More Courses</a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='design'
                role='tabpanel'
                aria-labelledby='design-tab'
              >
                <div className='row'>
                  <div className='col-xl-4 col-lg-4 col-md-6 '>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/1.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Photoshop</span>
                        <h3>
                          <a>
                            Mobile App design step by step <br />
                            from beginner
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/2.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Adobe XD</span>
                        <h3>
                          <a>UI/UX design with Adobe XD with Anderson</a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/3.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Wordpress</span>
                        <h3>
                          <a>
                            Wordpress theme development <br />
                            from scratch
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/4.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Photoshop</span>
                        <h3>
                          <a>
                            Mobile App design step by step <br />
                            from beginner
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <img src='img/courses/5.png' alt='' />
                      </div>
                      <div className='courses_info'>
                        <span>UI/UX</span>
                        <h3>
                          <a>
                            How to complete user research <br />
                            and make work flow
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/6.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Wordpress</span>
                        <h3>
                          <a>
                            Commitment to dedicated <br />
                            Support
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-12'>
                    <div className='more_courses text-center'>
                      <a className='boxed_btn_rev'>More Courses</a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='Web'
                role='tabpanel'
                aria-labelledby='Web-tab'
              >
                <div className='row'>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/1.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Photoshop</span>
                        <h3>
                          <a>
                            Mobile App design step by step <br />
                            from beginner
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/2.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Adobe XD</span>
                        <h3>
                          <a>UI/UX design with Adobe XD with Anderson</a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/3.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Wordpress</span>
                        <h3>
                          <a>
                            Wordpress theme development <br />
                            from scratch
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/4.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Photoshop</span>
                        <h3>
                          <a>
                            Mobile App design step by step <br />
                            from beginner
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <img src='img/courses/5.png' alt='' />
                      </div>
                      <div className='courses_info'>
                        <span>UI/UX</span>
                        <h3>
                          <a>
                            How to complete user research <br />
                            and make work flow
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/6.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Wordpress</span>
                        <h3>
                          <a>
                            Commitment to dedicated <br />
                            Support
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-12'>
                    <div className='more_courses text-center'>
                      <a className='boxed_btn_rev'>More Courses</a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='Web1'
                role='tabpanel'
                aria-labelledby='Web-tab1'
              >
                <div className='row'>
                  <div className='col-xl-4 col-lg-4  col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/1.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Photoshop</span>
                        <h3>
                          <a>
                            Mobile App design step by step <br />
                            from beginner
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/2.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Adobe XD</span>
                        <h3>
                          <a>UI/UX design with Adobe XD with Anderson</a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/3.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Wordpress</span>
                        <h3>
                          <a>
                            Wordpress theme development <br />
                            from scratch
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/4.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Photoshop</span>
                        <h3>
                          <a>
                            Mobile App design step by step <br />
                            from beginner
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <img src='img/courses/5.png' alt='' />
                      </div>
                      <div className='courses_info'>
                        <span>UI/UX</span>
                        <h3>
                          <a>
                            How to complete user research <br />
                            and make work flow
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/6.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Wordpress</span>
                        <h3>
                          <a>
                            Commitment to dedicated <br />
                            Support
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-12'>
                    <div className='more_courses text-center'>
                      <a className='boxed_btn_rev'>More Courses</a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='Web11'
                role='tabpanel'
                aria-labelledby='Web-tab11'
              >
                <div className='row'>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/1.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Photoshop</span>
                        <h3>
                          <a>
                            Mobile App design step by step <br />
                            from beginner
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/2.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Adobe XD</span>
                        <h3>
                          <a>UI/UX design with Adobe XD with Anderson</a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/3.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Wordpress</span>
                        <h3>
                          <a>
                            Wordpress theme development <br />
                            from scratch
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/4.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Photoshop</span>
                        <h3>
                          <a>
                            Mobile App design step by step <br />
                            from beginner
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <img src='img/courses/5.png' alt='' />
                      </div>
                      <div className='courses_info'>
                        <span>UI/UX</span>
                        <h3>
                          <a>
                            How to complete user research <br />
                            and make work flow
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/6.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Wordpress</span>
                        <h3>
                          <a>
                            Commitment to dedicated <br />
                            Support
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-12'>
                    <div className='more_courses text-center'>
                      <a className='boxed_btn_rev'>More Courses</a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='Adobe-XD8'
                role='tabpanel'
                aria-labelledby='Adobe-XD8'
              >
                <div className='row'>
                  <div className='col-xl-4 col-lg-4  col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/1.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Photoshop</span>
                        <h3>
                          <a>
                            Mobile App design step by step <br />
                            from beginner
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/2.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Adobe XD</span>
                        <h3>
                          <a>UI/UX design with Adobe XD with Anderson</a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/3.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Wordpress</span>
                        <h3>
                          <a>
                            Wordpress theme development <br />
                            from scratch
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/4.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Photoshop</span>
                        <h3>
                          <a>
                            Mobile App design step by step <br />
                            from beginner
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <img src='img/courses/5.png' alt='' />
                      </div>
                      <div className='courses_info'>
                        <span>UI/UX</span>
                        <h3>
                          <a>
                            How to complete user research <br />
                            and make work flow
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/6.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Wordpress</span>
                        <h3>
                          <a>
                            Commitment to dedicated <br />
                            Support
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-12'>
                    <div className='more_courses text-center'>
                      <a className='boxed_btn_rev'>More Courses</a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='Adobe-XD9'
                role='tabpanel'
                aria-labelledby='Adobe-XD-tab9'
              >
                <div className='row'>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/1.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Photoshop</span>
                        <h3>
                          <a>
                            Mobile App design step by step <br />
                            from beginner
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/2.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Adobe XD</span>
                        <h3>
                          <a>UI/UX design with Adobe XD with Anderson</a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/3.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Wordpress</span>
                        <h3>
                          <a>
                            Wordpress theme development <br />
                            from scratch
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6 '>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/4.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Photoshop</span>
                        <h3>
                          <a>
                            Mobile App design step by step <br />
                            from beginner
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <img src='img/courses/5.png' alt='' />
                      </div>
                      <div className='courses_info'>
                        <span>UI/UX</span>
                        <h3>
                          <a>
                            How to complete user research <br />
                            and make work flow
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-4 col-lg-4 col-md-6'>
                    <div className='single_courses'>
                      <div className='thumb'>
                        <a>
                          <img src='img/courses/6.png' alt='' />
                        </a>
                      </div>
                      <div className='courses_info'>
                        <span>Wordpress</span>
                        <h3>
                          <a>
                            Commitment to dedicated <br />
                            Support
                          </a>
                        </h3>
                        <div className='star_prise d-flex justify-content-between'>
                          <div className='star'>
                            <i className='flaticon-mark-as-favorite-star'></i>
                            <span>(4.5)</span>
                          </div>
                          <div className='prise'>
                            <span className='offer'>$89.00</span>
                            <span className='active_prise'>$49</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-12'>
                    <div className='more_courses text-center'>
                      <a className='boxed_btn_rev'>More Courses</a>
                    </div>
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

export default Popularcourse
