import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Socialbtn from '../Socialbtn'
import Loader from '../Loader'
import dbcon from '../dbcon'
import Profile_home from '../Profile_home'
import Profile_course from '../Profile_course'
import Profile_edit from '../Profile_edit'
import Profile_setting from '../Profile_setting'
import Profile_navbar from '../Profile_navbar'

export class Profile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      profile: {},
      permission: '',
      loading: true,
      id: window.location.pathname.split('/')[2],
      baseurl:"https://aiskilllabsimages.s3.amazonaws.com/userimg/",
    }
  }
  componentDidMount () {
    var this1 = this
    const accountid = window.location.pathname.split('/')[2]
    dbcon.profilefetchwithurl(accountid, function (response) {
      if (response === 'loginview') {
        console.log('plz login to view the profile')
      } else {
        this1.setState(response)
        console.log(response)
      }
      this1.setState({ loading: false })
    })
  }

  dp () {
    if(this.state.profile.dplink==='true')
    return (
      this.state.baseurl+this.state.id+".jpg"
    )
    else return (window.location.origin + '/img/default_user.png')
  }
  edit () {
    if (this.state.permission === 'edit')
      return (
        <div>
          <Route
            path={'/profile/' + this.state.id + '/edit'}
            render={props => {
              return <Profile_edit profile={this.state.profile} />
            }}
          />
          <Route
            path={'/profile/' + this.state.id + '/setting'}
            render={props => {
              return <Profile_setting />
            }}
          />
        </div>
      )
  }
  profile () {
    return (
      <div>
        <div className='container'>
          <div className='row profile-container'>
            <div className='col-xl-4'>
              <div className='profile_sidebar'>
                <div className='user_thumb'>
                  <img src={this.dp()} alt='' />
                </div>
                <div className='profile_text'>
                  <h1>
                    {this.state.profile.firstname +
                      ' ' +
                      this.state.profile.lastname}
                  </h1>
                  <h4>{this.state.profile.profession}</h4>

                  <h4>{this.state.profile.description}</h4>
                </div>
                <Socialbtn profile={this.state.profile} />
              </div>
            </div>
            <div className='col-xl-8'>
              <div>
                <Router>
                  <Profile_navbar state={this.state} />
                  <Route
                    exact
                    path={'/profile/' + this.state.id + '/'}
                    render={props => {
                      return <Loader />
                    }}
                  />
                  <Route
                    path={'/profile/' + this.state.id + '/course'}
                    render={props => {
                      return <Profile_course />
                    }}
                  />
                  {this.edit()}
                </Router>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render () {
    if (this.state.loading) return <Loader />
    else return this.profile()
  }
}

export default Profile
