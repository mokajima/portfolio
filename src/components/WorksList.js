import React from 'react'
import Work from './Work'

function WorksList(props) {
  return (
    <section className="section">
      <h2 className="headline">Featured Work</h2>
      <ul className="featured-work">
        {props.works.map((work) => (
          <li key={work.id}>
            <Work work={work} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default WorksList
