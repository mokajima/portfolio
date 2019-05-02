import React, { FC } from 'react'
import './Work.css'

interface Props {
  work: Work
}

const Work: FC<Props> = ({
  work
}) => {
  const className = work.border ? 'work__img work__img--border' : 'work__img'

  return (
    <div className="work">
      <a href={work.url} target="_blank" rel="noopener noreferrer">
        <figure className={className}>
          <img src={`images/${work.id}.jpg`} alt={work.title} />
        </figure>
      </a>
      <h3 className="work__title">
        <a href={work.url} target="_blank" rel="noopener noreferrer">{work.title}</a>
      </h3>
      <p className="work__summary">{work.summary}</p>
    </div>
  )
}

export default Work
