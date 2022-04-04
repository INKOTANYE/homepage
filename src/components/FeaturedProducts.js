import React, { useState, useContext } from 'react'
import "../style/FeaturedProducts.css"
import Slider from "react-slick";
import MenuContext from '../context/MenuContext'
import { useNavigate} from 'react-router-dom'
import "slick-carousel/slick/slick.css"


function NextArrow(props) {
    const { className, onClick} = props;
    return (
      <button
        className={className}
        
        style={{ 
            background: "#400E03", 
            color:'white',
            width: "48px",
            height: "48px",
            borderRadius: "2px",
            marginRight:"-30px",
            display:"inline-block",
            }}
        onClick={onClick}
      />
    );
  }
  
  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        className={className}
        style={{ 
            background: "#400E03", 
            color:'white',
            width: "48px",
            height: "48px",
            borderRadius: "2px",
            marginLeft:"-30px",
           }}
        onClick={onClick}
      />
    );
  }

function FeaturedProducts() {
    
  const {setMenu}=useContext(MenuContext)
  const navigate = useNavigate();


    const [slider]=useState([
        {title:"ICEWAYS 1", 
        content:"City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use."},
        
        {title:"DRIVEWAYS SPORT 1", 
        content:"Driveways is a ‘’Comfort tyre’’ developed for a considerably wide vehicle pool ranging from middle class sedans to upper class comfort automobiles."},

        {title:"DRIVEWAYS COMPETUS H/P 1", 
        content:"City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use."},

        {title:"ICEWAYS 2", 
        content:"City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use."},
        
        {title:"DRIVEWAYS SPORT 2", 
        content:"Driveways is a ‘’Comfort tyre’’ developed for a considerably wide vehicle pool ranging from middle class sedans to upper class comfort automobiles."},

        {title:"DRIVEWAYS COMPETUS H/P 2", 
        content:"City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use."},  
    ])

    const goToLearnMore = (element) => {
        navigate(`/learnmore/${element.title}`)
        setMenu(`${element.title}`)
    }

    const goToFindADealer= (element) => {
        navigate(`/findadealer/${element.title}`)
        setMenu(`${element.title}`)
    }

    var settings = {
        dots:true,
       
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        
      }

  return (
    <div className='FeaturedProducts'>
        <h1>Featured Products</h1>
        
        <Slider {...settings} className="slider">
            {slider.map((element,key) => (
                <div key={key}>
                    <div className='slider-component'>
                        <h2>{element.title}</h2>
                        <h6>{element.content}</h6>
                        <div className='slider-buttons'>
                            <button className='button-learnmore' onClick={() => goToLearnMore(element)}><h6>LEARN MORE</h6></button>
                            <button className='button-findadealer' onClick={() => goToFindADealer(element)}><h6>FIND A DEALER </h6></button>
                        </div>                    
                    </div>
                </div>
            ))}
        </Slider>
    </div>
  )
}

export default FeaturedProducts