import React, { FC } from 'react'
import PropTypes from 'prop-types'

const Work: FC<any> = ({
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

Work.propTypes = {
  work: PropTypes.object.isRequired
}

export default Work
