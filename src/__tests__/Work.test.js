import React from 'react'
import Work from '../components/Work'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const work = {
    id: 'readable',
    title: 'Readable',
    summary: 'An anonymous content and comment web application.',
    url: 'https://github.com/mokajima/readable',
    border: true,
    date: '2018-12'
  }

  let tree = renderer
    .create(<Work work={{ ...work, border: true }} />)
    .toJSON()
  expect(tree).toMatchSnapshot()

  tree = renderer
    .create(<Work work={{ ...work, border: false }} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
