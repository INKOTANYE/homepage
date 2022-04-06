import React from 'react'
import FeaturedProducts from './FeaturedProducts'
import Hero from './Hero'
import Promo from './Promo'
import MenuList from './MenuList'


function HomePage( {open, menuList}) {


  return (
    <div>
      {open && <MenuList menuList={menuList}/> }
     
      <div>
            <FeaturedProducts/>
            <Hero/>
            <Promo/>
      </div>
      
    </div>
  )
}

export default HomePage