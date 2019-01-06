import React, {Component} from 'react'
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
      .then((works) => {
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
