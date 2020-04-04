import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>

                <footer className="footer footer_bg_1">
                    <div className="footer_top">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-md-6 col-lg-4">
                                    <div className="footer_widget">
                                        <div className="footer_logo">
                                            <a >
                                                <img src={window.location.origin+'/img/logo.png '} alt="" />
                                            </a>
                                        </div>
                                        <p>
                                            Firmament morning sixth subdue darkness creeping gathered divide our let god moving.
                                            Moving in fourth air night bring upon it beast let you dominion likeness open place day
                                            great.
                                            </p>
                                        <div className="socail_links">
                                            <ul>
                                                <li>
                                                    <a >
                                                        <i className="ti-facebook"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a >
                                                        <i className="ti-twitter-alt"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a >
                                                        <i className="fa fa-instagram"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a >
                                                        <i className="fa fa-youtube-play"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-xl-2 offset-xl-1 col-md-6 col-lg-3">
                                    <div className="footer_widget">
                                        <h3 className="footer_title">
                                            Courses
                            </h3>
                                        <ul>
                                            <li><a >Wordpress</a></li>
                                            <li><a > Photoshop</a></li>
                                            <li><a >Illustrator</a></li>
                                            <li><a >Adobe XD</a></li>
                                            <li><a >UI/UX</a></li>
                                        </ul>

                                    </div>
                                </div>
                                <div className="col-xl-2 col-md-6 col-lg-2">
                                    <div className="footer_widget">
                                        <h3 className="footer_title">
                                            Resourches
                            </h3>
                                        <ul>
                                            <li><a >Free Adobe XD</a></li>
                                            <li><a >Tutorials</a></li>
                                            <li><a >About</a></li>
                                            <li><a > About</a></li>
                                            <li><a > Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 col-lg-3">
                                    <div className="footer_widget">
                                        <h3 className="footer_title">
                                            Address
                            </h3>
                                        <p>
                                            200, D-block, Green lane USA <br />
                                            +10 367 467 8934 <br />
                                            edumark@contact.com
                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        )
    }
}

export default Footer
