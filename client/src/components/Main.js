import React, { Component } from 'react';
import Intro from './Intro'

export class Main extends Component {
    render() {
        return (
            <div>
                <main role="main">
        <section className="banner container">
            <div className="photo-banner">
                <img src={this.props.profile.image} alt="Pavel Belodurin"></img>
            </div>
            <div className="descr-banner">
                <Intro about={this.props.location.profile.about} name={this.props.profile.name}/>
                <a href="#portfolio" className="btn">View {this.props.profile.name}Portfolio</a>
            </div>
        </section>
        <div className="first-style-sec">
            <section id="about" className="about space-section container">
                <h2>&lt;About<span className="slash">/</span>&gt;</h2>
                <p>{this.props.profile.description}</p>
            </section>
        </div>
        <div className="first-style-sec">
            <section id="contacts" className="contacts space-section container">
                <h2>&lt;Get in touch<span className="slash">/</span>&gt;</h2>
                <form className="" action="#" method="post">
                    <fieldset>
                        <input type="text" name="user-name" placeholder="Name"/>
                      <input type="email" name="user-email" placeholder="Email"/>
                        <textarea></textarea>
                    </fieldset>
                    <button className="btn">Send</button>
                </form>
               
                <div className="social-col">
                    <p>Do you have questions?May be suggestions?Just write me.I will reply you.</p>
                    <p><b><span className="slash">Follow</span> me in social media</b></p>
                    
                </div>
            </section>
        </div>
    </main>
            </div>
        )
    }
}

export default Main
