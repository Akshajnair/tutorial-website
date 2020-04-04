import React, { Component } from 'react';
import Profileitem from './Profileitem';
class Profile extends Component {
    yo=function(){
        console.log("yolo");
    }

    render() {
        
        return this.props.profile.map((profiles)=>(
                    <Profileitem profile={profiles} schange={this.props.schange} />         
        ));
    }
}
export default Profile;
