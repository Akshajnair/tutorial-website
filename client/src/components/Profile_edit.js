import React, { Component } from 'react'
import dbcon from './dbcon'
import Loader from './Loader'
import ImageUploader from 'react-images-upload'

export default class Profile_edit extends Component {
  constructor (props) {
    super(props)
    const prop = this.props.profile
    this.state = {
      firstname: prop.firstname,
      lastname: prop.lastname,
      email: prop.email,
      profession: prop.profession,
      description: prop.description,
      website: prop.website,
      facebook: prop.facebook,
      twitter: prop.twitter,
      linkedin: prop.linkedin,
      youtube: prop.youtube,
      dplink: prop.dplink,
      coverlink: prop.coverlink,
      dpselected: null,
      coverselected: null,
      loading: false,
      status: '',
      pictures: null
    }
    this.onDrop = this.onDrop.bind(this)
    this.upload = this.upload.bind(this)
    this.fileselect = this.fileselect.bind(this)
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state)
  }
  onupdatehandler = e => {
    const this1 = this
    this.setState({ loading: true })
    const profile = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      profession: this.state.profession,
      description: this.state.description,
      website: this.state.website,
      facebook: this.state.facebook,
      twitter: this.state.twitter,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      dplink: this.state.dplink,
      coverlink: this.state.coverlink
    }
    e.preventDefault()
    dbcon.profileupdatewithtoken(profile, function (response) {
      this1.setState({ status: response })
      this1.setState({ loading: false })
    })
  }
  errordisp () {
    if (this.state.status !== '')
      return (
        <div class='alert alert-info alert-dismissable'>
          <a class='panel-close close' data-dismiss='alert'>
            ×
          </a>
          <i class='fa fa-coffee'></i>
          <strong>{this.state.status}</strong>
        </div>
      )
  }
  onDrop (picture) {
    this.setState({
      pictures: picture[0]
    })
  }

  upload (e) {
    e.preventDefault()
    dbcon.imageupload(this.state.pictures, function (response) {
      console.log(response)
    })
  }

  profile_edit () {
    return (
      <div>
        <h1>Edit Profile</h1>

        <div class='personal-info'>
          {this.errordisp()}
          <h3>Personal info</h3>
          <div class='text-center'>
            <img
              src={this.state.dplink}
              class='avatar img-circle'
              alt='avatar'
              style={{ width: '200px', height: '200px' }}
            />
            <h6>Upload a different photo...</h6>
            <form onSubmit={this.upload}>
              <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                withPreview={true}
                singleImage={true}
              />
              <button type='submit'>UPLOAD</button>
            </form>
          </div>

          <form
            class='form-horizontal'
            role='form'
            onSubmit={this.onupdatehandler}
          >
            <div class='form-group'>
              <label class='col-lg-3 control-label'>First name:</label>
              <div class='col-lg-8'>
                <input
                  class='form-control'
                  type='text'
                  value={this.state.firstname}
                  placeholder='Enter your First Name'
                  onChange={this.onChange}
                  name='firstname'
                />
              </div>
            </div>
            <div class='form-group'>
              <label class='col-lg-3 control-label'>Last name:</label>
              <div class='col-lg-8'>
                <input
                  class='form-control'
                  type='text'
                  value={this.state.lastname}
                  placeholder='Enter your Last Name'
                  onChange={this.onChange}
                  name='lastname'
                />
              </div>
            </div>
            <div class='form-group'>
              <label class='col-lg-3 control-label'>Profession:</label>
              <div class='col-lg-8'>
                <input
                  class='form-control'
                  type='text'
                  value={this.state.profession}
                  placeholder='Enter your Profession'
                  onChange={this.onChange}
                  name='profession'
                />
              </div>
            </div>
            <div class='form-group'>
              <label class='col-md-3 control-label'>Description / Bio:</label>
              <div class='col-md-8'>
                <input
                  class='form-control'
                  type='text'
                  value={this.state.description}
                  placeholder='Enter your Profession'
                  onChange={this.onChange}
                  name='description'
                />
              </div>
            </div>
            <div class='form-group'>
              <label class='col-md-3 control-label'>Website:</label>
              <div class='col-md-8'>
                <input
                  class='form-control'
                  type='text'
                  value={this.state.website}
                  placeholder='Enter your Website Link'
                  onChange={this.onChange}
                  name='website'
                />
              </div>
            </div>
            <div class='form-group'>
              <label class='col-md-3 control-label'>Facebook:</label>
              <div class='col-md-8'>
                <input
                  class='form-control'
                  type='text'
                  value={this.state.facebook}
                  placeholder='Enter your Facebook profile Link'
                  onChange={this.onChange}
                  name='facebook'
                />
              </div>
            </div>
            <div class='form-group'>
              <label class='col-md-3 control-label'>Twitter:</label>
              <div class='col-md-8'>
                <input
                  class='form-control'
                  type='text'
                  value={this.state.twitter}
                  placeholder='Enter your Linkedin Twitter Link'
                  onChange={this.onChange}
                  name='twitter'
                />
              </div>
            </div>
            <div class='form-group'>
              <label class='col-md-3 control-label'>Linkedin:</label>
              <div class='col-md-8'>
                <input
                  class='form-control'
                  type='text'
                  value={this.state.linkedin}
                  placeholder='Enter your Linkedin profile Link'
                  onChange={this.onChange}
                  name='linkedin'
                />
              </div>
            </div>
            <div class='form-group'>
              <label class='col-md-3 control-label'>Youtube:</label>
              <div class='col-md-8'>
                <input
                  class='form-control'
                  type='text'
                  value={this.state.youtube}
                  placeholder='Enter your Youtube page Link'
                  onChange={this.onChange}
                  name='youtube'
                />
              </div>
            </div>
            <div class='form-group'>
              <label class='col-lg-3 control-label'>Email:</label>
              <div class='col-lg-8'>
                <input
                  class='form-control'
                  type='text'
                  value={this.state.email}
                  placeholder='Enter your Email'
                  onChange={this.onChange}
                  name='email'
                />
              </div>
            </div>
            {/* <div class='form-group'>
                <label class='col-md-3 control-label'>Password:</label>
                <div class='col-md-8'>
                  <input
                    class='form-control'
                    type='password'
                    value='11111122333'
                  />
                </div>
              </div>
              <div class='form-group'>
                <label class='col-md-3 control-label'>Confirm password:</label>
                <div class='col-md-8'>
                  <input
                    class='form-control'
                    type='password'
                    value='11111122333'
                  />
                </div>
              </div> */}
            <div class='form-group'>
              <label class='col-md-3 control-label'></label>
              <div class='col-md-8'>
                <input type='submit' class='btn btn-primary' value='Save' />
                <span></span>
                <input type='reset' class='btn btn-default' value='Cancel' />
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }

  render () {
    if (this.loading === true) return <Loader />
    return this.profile_edit()
  }
}
