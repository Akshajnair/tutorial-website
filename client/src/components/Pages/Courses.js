import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Course from '../Course';
import Popularcourse from '../Popularcourse'
export class Courses extends Component {
    render() {
        return (
            <div>
                <div className="bradcam_area breadcam_bg overlay2">
                <h3>Our Courses</h3>
            </div>
            <Popularcourse/>
            </div>
        )
    }
}

export default Courses
