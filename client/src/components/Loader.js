import React, { Component } from 'react'

export default class Loader extends Component {
  render () {
    return (
      <div className='loaderpage'>
        <div className="containerloader">
  <div className="ball"></div>
  <div className="ball"></div>
  <div className="ball"></div>
  <div className="ball"></div>
  <div className="ball"></div>
  <div className="ball"></div>
  <div className="ball"></div>
  <div className='loadertext'>Loading...</div>
</div>
        {/* <div className='preloader loading'>
          <span className='slice'></span>
          <span className='slice'></span>
          <span className='slice'></span>
          <span className='slice'></span>
          <span className='slice'></span>
          <span className='slice'></span>
        </div> */}
      </div>
    )
  }
}
