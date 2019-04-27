import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { getWorks } from '../utils/api'
import WorksList from './WorksList'
import './App.css'
import header from '../header.jpg'

class App extends Component {
  state = {
    works: []
  }

  componentDidMount() {
    getWorks()
      .then(works => {
        this.setState({ works })
      })
  }

  render() {
    const year = new Date().getFullYear()

    return (
      <div>
        <header className="header">
          <h1 className="header__logo">Misaki's Portfolio Website</h1>
        </header>
        <main className="main">
          <header className="hero">
            <h2 className="hero__title">Hello, I'm Misaki!</h2>
            <img className="hero__img" src={header} alt="" />
          </header>
          <WorksList works={this.state.works} />
        </main>
        <footer className="footer">
          <div className="footer__inner profile">
            <h2 className="headline">About Me</h2>
            <p className="profile__bio">Hello, I'm Misaki, a front end developer, based in Japan.</p>
            <ul className="footer__nav">
              <li className="footer__nav-item">
                <a href="https://github.com/mokajima/">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </li>
              <li className="footer__nav-item">
                <a href="https://twitter.com/mokajima85z">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </li>
            </ul>
          </div>
          <p className="copyright">
            <small>&copy; {year} Misaki's Portfolio Website</small>
          </p>
        </footer>
      </div>
    )
  }
}

export default App
