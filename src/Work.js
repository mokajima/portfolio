import React from 'react'

const Work = (props) => {
  const {work} = props
  const className = work.border ? 'work__img work__img--border' : 'work__img'

  return (
    <li className="featured-work__item work">
      <a href={work.url} target="_blank">
        <figure className={className}>
          <img src={`images/${work.id}.jpg`} alt={work.title} />
        </figure>
      </a>
      <h3 className="work__title">
        <a href={work.url} target="_blank">{work.title}</a>
      </h3>
      <p className="work__summary">{work.summary}</p>
    </li>
  )
}

export default Work
