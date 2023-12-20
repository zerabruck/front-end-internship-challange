import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import "../style/actor-detail.css"
const ActorDetail = ({actor, display}) => {
  return (
    <div className='actor-detail-container'>
        <div onClick={()=>display(false)} className='actor-detail-back-button'>
        <FaChevronLeft size={40} color='#add8e6'/>
        </div>
        <div className='actor-detail-header'>
            <p>
            {actor.name}
            </p>
        </div>
        
        
        <div className='actor-detail-body-container'>
            <div>
                <p>Height : {actor.height}</p>
                <p>Mass : {actor.mass}</p>
                <p>Birth Year : {actor.birth_year}</p>
                <p>Gender : {actor.gender}</p>
            </div>
            <div>
                <p>Hair Color:{actor.hair_color}</p>
                <p>Skin Color:{actor.skin_color}</p>
                <p>Eye Color:{actor.eye_color}</p>
            </div>
        </div>

    </div>
  )
}

export default ActorDetail