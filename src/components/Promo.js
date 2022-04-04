import React from 'react'
import "../style/Promo.css"

function Promo() {

  return (
    <div className='Promo'>
      <header>
        <h1>Feel the excellent wet braking with Driveways!</h1>
        <a href="https://www.lassa.com/tyre-videos"><h1>Watch All Videos</h1></a>
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