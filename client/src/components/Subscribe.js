import React, { Component } from 'react'

export class Subscribe extends Component {
  render () {
    return (
      <div className='subscribe_newsletter'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-6 col-lg-6'>
              <div className='newsletter_text'>
                <h3>Subscribe Newsletter</h3>
                <p>
                  Your domain control panel is designed for ease-of-use and
                  allows for all aspects of your
                </p>
              </div>
            </div>
            <div className='col-xl-5 offset-xl-1 col-lg-6'>
              <div className='newsletter_form'>
                <h4>Your domain control panel is</h4>
                <form action='#' className='newsletter_form'>
                  <input type='text' placeholder='Enter your mail' />
                  <button type='submit'>Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Subscribe
