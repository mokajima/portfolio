import React from 'react'
import WorksList from '../components/WorksList'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const works = [{
    id: 'readable',
    title: 'Readable',
    summary: 'An anonymous content and comment web application.',
    url: 'https://github.com/mokajima/readable',
    border: true,
    date: '2018-12'
  }]

  const tree = renderer
    .create(<WorksList works={works} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
