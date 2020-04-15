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
      profession: prop.profession,
      description: prop.description,
      website: prop.website,
      facebook: prop.facebook,
      twitter: prop.twitter,
      linkedin: prop.linkedin,
      youtube: prop.youtube,
      dplink: prop.dplink,
      dpselected: null,
      coverselected: null,
      loading: false,
      status: '',
      pictures: null
    }
    this.onDrop = this.onDrop.bind(this)
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
      profession: this.state.profession,
      description: this.state.description,
      website: this.state.website,
      facebook: this.state.facebook,
      twitter: this.state.twitter,
      linkedin: this.state.linkedin,
      youtube: this.state.youtube,
      dplink: this.state.dplink
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
    this.setState({ loading: true })
    const this1 = this
    dbcon.imageupload(picture[0], function (response) {
      console.log(response)
      this1.setState({
        status:
          'avatar changed and will be adjusted automatically.. refresh to see change'
      })
      window.location=window.location
    })
  }

  profile_edit () {
    return (
      <div>
        <h1>Edit Profile</h1>
        <div class='personal-info'>
          {this.errordisp()}
          <h3>Personal info</h3>
          <hr />
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
                <input type='reset' class='btn btn-primary' value='Cancel' />
              </div>
            </div>
          </form>
          <div class='text-center'>
            <h3>Change Avatar</h3>
            <hr />
            <form onSubmit={this.upload}>
              <div className='imageupload'>
                <ImageUploader
                  withIcon={false}
                  buttonText='Upload'
                  buttonClassName={''}
                  onChange={this.onDrop}
                  imgExtension={['.jpg', '.jpeg', '.png']}
                  maxFileSize={5242880}
                  singleImage={true}
                  withLabel={true}
                  label={'max image size : 5MB'}
                  labelStyles={{ fontSize: '20px' }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  render () {
    if (this.state.loading === true) return <Loader />
    return this.profile_edit()
  }
}
