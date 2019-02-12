import React from 'react'
import PropTypes from 'prop-types'
import Work from './Work'

const WorksList = props => (
  <section className="section">
    <h2 className="headline">Featured Work</h2>
    <ul className="featured-work">
      {props.works.map(work => (
        <li key={work.id}>
          <Work work={work} />
        </li>
      ))}
    </ul>
  </section>
)

WorksList.propTypes = {
  works: PropTypes.array.isRequired
}

export default WorksList
