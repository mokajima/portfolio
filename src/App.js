import React, {Component} from 'react'
import Work from './Work'
import './App.css'
import header from './header.jpg'

class App extends Component {
  state = {
    works: []
  }

  componentDidMount() {
    fetch('works.json')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          works: data.works
        })
      })
  }

  render() {
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
          <section className="section">
            <h2 className="headline">Featured Work</h2>
            <ul className="featured-work">
              {this.state.works.map((work) => (
                <li key={work.id}>
                  <Work work={work} />
                </li>
              ))}
            </ul>
          </section>
        </main>
        <footer className="footer">
          <div className="footer__inner profile">
            <h2 className="headline">About Me</h2>
            <p className="profile__bio">Hello, I'm Misaki, a front end developer, based in Japan.</p>
          </div>
          <p className="copyright"><small>&copy; 2018 Misaki's Portfolio Website</small></p>
        </footer>
      </div>
    )
  }
}

export default App
