import React, { Component } from 'react'
import { getWorks } from '../utils/api'
import Work from './Work'

interface State {
  works: Work[];
}

class WorksList extends Component<{}, State> {
  state = {
    works: []
  }

  componentDidMount() {
    getWorks()
      .then((works: Work[]) => {
        this.setState({ works })
      })
  }

  render() {
    return (
      <section className="section">
        <h2 className="headline">Featured Work</h2>
        <ul className="featured-work">
          {this.state.works.map((work: Work) => (
            <li key={work.id}>
              <Work work={work} />
            </li>
          ))}
        </ul>
      </section>
    )
  }
}

export default WorksList
