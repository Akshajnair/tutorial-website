import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom'

export class dbcon extends Component {
  constructor (props) {
    super(props)

    this.state = {
      // baseurl: 'http://localhost:5000',
      baseurl: window.location.origin,
      prevlink: ''
    }
  }

  prevlink (link) {
    if (link !== '/login') this.setState({ prevlink: link })
  }
  prevlink1 (callback) {
    console.log(this.state.prevlink)
    callback(this.state.prevlink)
  }

  // called by app.js for checking the token saved in browser
  token (callback) {
    var this1 = this
    //for Session
    const tokenid = sessionStorage.getItem('token') || ''
    if (tokenid) {
      if ((localStorage.getItem('token') || '') === '') {
        localStorage.removeItem('token')
        sessionStorage.removeItem('token')
        window.location = window.location.origin
      } else {
        this.fetchuserinfobytoken(tokenid, function (result) {
          callback(result)
        })
      }
    } else {
      //for local
      const tokenid = localStorage.getItem('token') || ''
      if (tokenid) {
        this.newtoken(tokenid, function (result) {
          this1.fetchuserinfobytoken(result, function (res) {
            callback(res)
          })
        })
      } else {
        //if no data
        callback('nodata')
        localStorage.removeItem('token')
        sessionStorage.removeItem('token')
      }
    }
  }
  //to create new token from existing token saved in local storage
  newtoken (e, callback) {
    axios
      .post(this.state.baseurl + '/token/add', { tokenid: e })
      .then(res => {
        localStorage.setItem('token', res.data)
        sessionStorage.setItem('token', res.data)
        callback(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  //to fetch user datails from tokenid
  fetchuserinfobytoken (id, callback) {
    axios
      .get(this.state.baseurl + '/account/token/' + id)
      .then(response => {
        callback(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
  // login function ...called by onlogin handler in header.js
  login (cred, callback) {
    axios
      .get(
        this.state.baseurl +
          '/account/email/' +
          cred.email +
          '/' +
          cred.password
      )
      .then(response => {
        if (response.data.res) {
          callback('wrong')
        } else {
          localStorage.setItem('token', response.data)
          sessionStorage.setItem('token', response.data)
          callback(response.data)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  emailcheck (email, callback) {
    axios
      .get(
        this.state.baseurl +
          '/account/emailcheck/' +
          String(email).toLowerCase()
      )
      .then(res => {
        if (res.data.res === 'notexist') callback('notexist')
        else if (res.data.res === 'exist') callback('exist')
      })
      .catch(error => {
        console.log(error)
      })
  }
  otpsend (email, callback) {
    axios
      .post(this.state.baseurl + '/email/mail/' + email)
      .then(res => {
        console.log(res)
        callback(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  otpcheck (info, callback) {
    const data = {
      firstname: info.firstname,
      lastname: info.lastname,
      email: info.email,
      password: info.password,
      otp: info.otp
    }
    axios
      .post(this.state.baseurl + '/email/check', data)
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data)
        sessionStorage.setItem('token', res.data)
        callback('ok')
      })
      .catch(error => {
        console.log(error)
      })
  }
  //Signup function... called by on signup handler in header.js
  signup (userinfo, callback) {
    const options = {
      url: this.state.baseurl + '/account/add',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      data: {
        firstname: userinfo.firstname,
        lastname: userinfo.lastname,
        email: userinfo.email,
        password: userinfo.password
      }
    }
    console.log(options.data)
    if (
      userinfo.firstname.length < 3 ||
      userinfo.lastname.length < 3 ||
      userinfo.email.length < 5
    )
      callback('fill all the fields')
    else if (userinfo.password.length < 6) {
      callback('password too short')
    } else if (userinfo.confirmpassword !== userinfo.password)
      callback('password do not match!!!')
    else {
      axios(options)
        .then(res => {
          if (res.data == 'exist') callback('Email already exist')
          else window.location = '/'
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
  //logout function called in loginico.js
  logout (callback) {
    const tokenid =
      localStorage.getItem('token') || localStorage.getItem('token')
    axios
      .post(this.state.baseurl + '/token/update/' + tokenid)
      .then(res => {
        localStorage.removeItem('token')
        sessionStorage.removeItem('token')
        callback('logout')
      })
      .catch(error => {
        console.log(error)
        localStorage.removeItem('token')
        sessionStorage.removeItem('token')
        window.location = window.location.origin
      })
  }
  //fetch course on the basis of id
  fetchcourses (courseid, callback) {
    axios
      .get(this.state.baseurl + '/tutorial/' + courseid)
      .then(response => {
        console.log(response)
        if (response.data.hasOwnProperty('_id')) {
          axios
            .get(
              this.state.baseurl + '/account/trainer/' + response.data.trainerid
            )
            .then(res => {
              console.log(res)
              const data = { course: response.data, trainer: res.data }
              callback(data)
              console.log(data)
            })
        } else callback('error')
      })
      .catch(error => {
        console.log(error)
      })
  }
  // fetch course on with token id and url
  profilefetchwithurl (accountid, callback) {
    const tokenid =
      sessionStorage.getItem('token') || localStorage.getItem('token') || 'null'
    axios
      .get(
        this.state.baseurl +
          '/account/profilefetch/' +
          accountid +
          '/' +
          tokenid
      )
      .then(response => {
        callback(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
  profileupdatewithtoken (profile, callback) {
    const tokenid =
      sessionStorage.getItem('token') || localStorage.getItem('token') || 'null'
    if (!(tokenid === 'null')) {
      const options = {
        url: this.state.baseurl + '/account/update/' + tokenid,
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        data: {
          firstname: profile.firstname,
          lastname: profile.lastname,
          profession: profile.profession,
          description: profile.description,
          website: profile.website,
          facebook: profile.facebook,
          twitter: profile.twitter,
          linkedin: profile.linkedin,
          youtube: profile.youtube,
          dplink: profile.dplink
        }
      }
      console.log(options.data)
      if (profile.firstname.length < 2 || profile.lastname.length < 2)
        callback('Invalid Name Entered')
      else {
        axios(options)
          .then(res => {
            if (res.data === 'updated') callback('Account Updated')
            else callback('Some thing is WRONG!! Cant update details')
          })
          .catch(error => {
            console.log(error)
            callback('Some thing is WRONG!! Cant update details')
          })
      }
    }
  }
  signupupdatewithtoken (profile, callback) {
    const tokenid =
      sessionStorage.getItem('token') || localStorage.getItem('token') || 'null'
    if (!(tokenid === 'null')) {
      const options = {
        url: this.state.baseurl + '/account/signupupdate/' + tokenid,
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        data: {
          profession: profile.profession,
          description: profile.description,
          website: profile.website,
          facebook: profile.facebook,
          twitter: profile.twitter,
          linkedin: profile.linkedin,
          youtube: profile.youtube,
        }
      }
        axios(options)
          .then(res => {
            callback(res)
          })
          .catch(error => {
            console.log(error)
          })
      }
    
  }
  imageupload (image, callback) {
    const tokenid =
      sessionStorage.getItem('token') || localStorage.getItem('token')
    const fd = new FormData()
    fd.append('myImage', image)
    const options = {
      headers: { 'content-type': 'multipart/form-data' }
    }
    console.log(image)
    axios
      .post(this.state.baseurl + '/images/add/' + tokenid, fd, options)
      .then(res => {
        const res1=res
        axios
          .post(
            this.state.baseurl +
              '/imagescompress/' +
              tokenid,
            {}
          )
          .then(res => {
            callback(res1)
          })
          .catch(error => {
            console.log(error)
          })
      })
      .catch(error => {
        console.log(error)
      })
  }
}

const db = new dbcon()
export default db
