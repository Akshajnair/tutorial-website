import React, { Component } from 'react'

export class Latestblog extends Component {
  render () {
    return (
      <div className='our_latest_blog'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='section_title text-center mb-100'>
                <h3>Our Latest Blog</h3>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-4 col-md-4'>
              <div className='single_latest_blog'>
                <div className='thumb'>
                  <img src={window.location.origin+'/img/latest_blog/1.png'} alt='' />
                </div>
                <div className='content_blog'>
                  <div className='date'>
                    <p>
                      12 Jun, 2019 in <a>Design tips</a>
                    </p>
                  </div>
                  <div className='blog_meta'>
                    <h3>
                      <a>Commitment to dedicated Support</a>
                    </h3>
                  </div>
                  <p className='blog_text'>
                    Firmament morning sixth subdue darkness creeping gathered
                    divide.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-md-4'>
              <div className='single_latest_blog'>
                <div className='thumb'>
                  <img src={window.location.origin+'/img/latest_blog/2.png'} alt='' />
                </div>
                <div className='content_blog'>
                  <div className='date'>
                    <p>
                      12 Jun, 2019 in <a>Design tips</a>
                    </p>
                  </div>
                  <div className='blog_meta'>
                    <h3>
                      <a>Commitment to dedicated Support</a>
                    </h3>
                  </div>
                  <p className='blog_text'>
                    Firmament morning sixth subdue darkness creeping gathered
                    divide.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-md-4'>
              <div className='single_latest_blog'>
                <div className='thumb'>
                  <img src={window.location.origin+'/img/latest_blog/3.png'} alt='' />
                </div>
                <div className='content_blog'>
                  <div className='date'>
                    <p>
                      12 Jun, 2019 in <a>Design tips</a>
                    </p>
                  </div>
                  <div className='blog_meta'>
                    <h3>
                      <a>Commitment to dedicated Support</a>
                    </h3>
                  </div>
                  <p className='blog_text'>
                    Firmament morning sixth subdue darkness creeping gathered
                    divide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Latestblog
