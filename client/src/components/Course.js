import React, { Component } from 'react'

export class Course extends Component {
    render() {
        return (
                <div className="col-xl-4 col-lg-4 col-md-6  col-md-6">
                                            <div className="single_courses">
                                                <div className="thumb">
                                                    
                                                        <img src="img/courses/1.png" alt=""/>
                                                    
                                                </div>
                                                <div className="courses_info">
                                                <span>{this.props.course.Category}</span>
                                                <h3>{this.props.course.details}</h3>
                                                <div className="star_prise d-flex justify-content-between">
                                                    <div className="star">
                                                        <i className="flaticon-mark-as-favorite-star"></i>
                                                        <span>{this.props.course.rating}</span>
                                                    </div>
                                                    <div className="prise">
                                                        <span className="offer">{this.props.course.orgprice}</span>
                                                        <span className="active_prise">
                                                        {this.props.course.actprice}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
        )
    }
}

export default Course
