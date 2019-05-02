import React, { FC } from 'react'
import Work from './Work'
import './WorksList.css'

interface Props {
  works: Work[];
}

const WorksList: FC<Props> = ({
  works
}) => (
  <section className="section">
    <h2 className="headline">Featured Work</h2>
    <ul className="featured-work">
      {works.map((work: Work) => (
        <li key={work.id}>
          <Work work={work} />
        </li>
      ))}
    </ul>
  </section>
)

export default WorksList
