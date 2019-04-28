import React from 'react'
import PropTypes from 'prop-types'
import Work from './Work'

const WorksList = (props: any) => (
  <section className="section">
    <h2 className="headline">Featured Work</h2>
    <ul className="featured-work">
      {props.works.map((work: any) => (
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
