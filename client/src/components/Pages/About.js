import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Coursespeciality from '../Coursespeciality'
import Aboutarea from '../Aboutarea'
import Subscribe from '../Subscribe'

function About() {
    return (
        <div>
                    <div className="bradcam_area breadcam_bg overlay2">
            <h3>About Us</h3>
        </div>
        {/* bradcam_area_end */}
    <Aboutarea/>
    {/* our_team_member_start */}
    <div className="our_team_member">
        <div className="container">
            <div className="row">
                <div className="col-xl-3 col-md-6 col-lg-3">
                    <div className="single_team">
                        <div className="thumb">
                            <img src="img/team/1.png" alt=""/>
                            <div className="social_link">
                                <a ><i className="fa fa-envelope"></i></a>
                                <a ><i className="fa fa-twitter"></i></a>
                                <a ><i className="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="master_name text-center">
                            <h3>Macau Wilium</h3>
                            <p>Massage Master</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 col-lg-3">
                    <div className="single_team">
                        <div className="thumb">
                            <img src="img/team/2.png" alt=""/>
                            <div className="social_link">
                                <a ><i className="fa fa-envelope"></i></a>
                                <a ><i className="fa fa-twitter"></i></a>
                                <a ><i className="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="master_name text-center">
                            <h3>Dan Jacky</h3>
                            <p>Mens Cut</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 col-lg-3">
                    <div className="single_team">
                        <div className="thumb">
                            <img src="img/team/3.png" alt=""/>
                            <div className="social_link">
                                <a ><i className="fa fa-envelope"></i></a>
                                <a ><i className="fa fa-twitter"></i></a>
                                <a ><i className="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="master_name text-center">
                            <h3>Luka Luka</h3>
                            <p>Mens Cut</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 col-lg-3">
                    <div className="single_team">
                        <div className="thumb">
                            <img src="img/team/4.png" alt=""/>
                            <div className="social_link">
                                <a ><i className="fa fa-envelope"></i></a>
                                <a ><i className="fa fa-twitter"></i></a>
                                <a ><i className="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="master_name text-center">
                            <h3>Rona Dana</h3>
                            <p>Ladies Cut</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* our_team_member_end */}

    <Coursespeciality/>
        </div>
    )
}

export default About;