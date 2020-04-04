import React, { Component } from 'react'

export default class Socialbtn extends Component {
  website () {
    if (this.props.profile.website)
      return (
        <a class='btn link' href={this.props.profile.website}>
          <i class='fa fa-link'></i>
        </a>
      )
  }
  facebook () {
    if (this.props.profile.facebook)
      return (
        <a class='btn facebook' href={this.props.profile.facebook}>
          <i class='fa fa-facebook'></i>
        </a>
      )
  }
  twitter () {
    if (this.props.profile.twitter)
      return (
        <a class='btn twitter' href={this.props.profile.twitter}>
          <i class='fa fa-twitter'></i>
        </a>
      )
  }
  linkedin () {
    if (this.props.profile.linkedin)
      return (
        <a class='btn linkedin' href={this.props.profile.linkedin}>
          <i class='fa fa-linkedin'></i>
        </a>
      )
  }
  youtube () {
    if (this.props.profile.youtube)
      return (
        <a class='btn youtube' href={this.props.profile.youtube}>
          <i class='fa fa-youtube'></i>
        </a>
      )
  }
  render () {
    return (
      <div class='social-btns'>
        {this.website()}
        {this.facebook()}
        {this.twitter()}
        {this.linkedin()}
        {this.youtube()}
      </div>
    )
  }
}
