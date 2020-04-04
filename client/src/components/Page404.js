import React, { Component } from 'react'

export default class Page404 extends Component {
    render() {
        return (
                  <div className="page404">
        <div class='mars'></div>
        <img
          src={window.location.origin+'/img/page404/404.svg'}
          class='logo-404'
        />
        <img
          src={window.location.origin+'/img/page404/meteor.svg'}
          class='meteor'
        />
        <p class='title404'>Oh no!!</p>
        <p class='subtitle404'>
          You’re either misspelling the URL <br /> or requesting a page that's
          no longer here.
        </p>
        <div align='center'>
          <a class='btn-back' href='#'>
            Back to previous page
          </a>
        </div>
        <img
          src={window.location.origin+'/img/page404/astronaut.svg'}
          class='astronaut'
        />
        <img
          src={window.location.origin+'/img/page404/spaceship.svg'}
          class='spaceship'
        />
      </div>
        )
    }
}
