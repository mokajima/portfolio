import React, { FC, useState, useEffect } from 'react'
import { getWorks } from '../utils/api'
import WorksList from '../components/WorksList'

const WorksListContainer: FC = () => {
  const [works, setWorks] = useState<Work[]>([])

  useEffect(() => {
    getWorks()
      .then((works: Work[]) => {
        setWorks(works)
      })
  }, [])

  return (
    <WorksList works={works} />
  )
}

export default WorksListContainer
