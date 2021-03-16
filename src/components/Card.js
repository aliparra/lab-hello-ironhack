import React from 'react'
import '../assets/css/Card.css'


const Card = ({title, description, image}) => {
    return(
        <div className='Card'>
          <img src={image.src} alt={image.alt}/>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
    )
}

export default Card