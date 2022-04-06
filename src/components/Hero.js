import React, {useContext} from 'react'
import "../style/Hero.css"
import MenuContext from '../context/MenuContext'
import { useNavigate} from 'react-router-dom'
import image from "../pictures/Hero.png"

function Hero() {
    const {setMenu}=useContext(MenuContext)
    const navigate = useNavigate();

    const goToRoutedPage = () => {
        navigate(`/more`)
        setMenu("FIND OUT MORE")
    }
    
  return (
    <div className='hero'>
        <img onClick={goToRoutedPage} className='heroImage' src={image}/>
    </div>
  )
}
 
export default Hero