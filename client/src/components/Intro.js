import React, { Component } from 'react'

export class Intro extends Component {
    render() {
        return (
            <div>
                <h1>&lt;{this.props.name}<span className="slash">/</span>&gt;</h1>
                <p>{this.props.about}</p>
            </div>
        )
    }
}

export default Intro
