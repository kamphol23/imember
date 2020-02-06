import React from 'react'

const DisplayScore = ({score}) => {
  return(
    <div>
    <p>{score.name}.......................{score.score}</p>
    </div>
  )
}
export default DisplayScore
