import React from 'react'
import "../style/actor-card.css"
const ActorCard = ({actor}) => {
  return (
    <>
    <p className='actor-card-header'>{actor.name}</p>
            <div className='actor-card-body'>
                <p>Height: <span>{actor.height}</span> </p>
                <p>Birth Year: <span>{actor.birth_year}</span></p>
            </div>
    </>
  )
}

export default ActorCard
