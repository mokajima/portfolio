import React, { Component } from 'react'
import { getWorks } from '../utils/api'
import Work from './Work'

class WorksList extends Component {
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
    return (
      <section className="section">
        <h2 className="headline">Featured Work</h2>
        <ul className="featured-work">
          {this.state.works.map((work: any) => (
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
