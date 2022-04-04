import React from 'react'
import FeaturedProducts from './FeaturedProducts'
import Hero from './Hero'
import Promo from './Promo'

function HomePage() {
  return (
    <div>
        <Hero/>
        <FeaturedProducts/>
        <Promo/>
    </div>
  )
}

export default HomePage