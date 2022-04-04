import React from 'react'
import "../style/Promo.css"
import { Link } from 'react-router-dom'

function Promo() {

  return (
    <div className='Promo'>
      <header>
        <h1>Feel the excellent wet braking with Driveways!</h1>
        <Link to="https://www.lassa.com/tyre-videos" className="promo-button"><button>Watch All Videos</button></Link>
      </header>


      <iframe 
      className='video'
      src="https://www.youtube.com/embed/fgXgcLIIsjc" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; 
      autoplay; 
      clipboard-write; 
      encrypted-media; 
      gyroscope; 
      picture-in-picture" 
      allowfullscreen>
      </iframe>
    </div>
  )
}

export default Promo