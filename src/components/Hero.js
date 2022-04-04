import React, {useContext} from 'react'
import "../style/Hero.css"
import MenuContext from '../context/MenuContext'
import { useNavigate} from 'react-router-dom'

function Hero() {
    const {setMenu}=useContext(MenuContext)
    const navigate = useNavigate();

    const goToRoutedPage = () => {
        navigate(`/more`)
        setMenu("FIND OUT MORE")
    }
    
  return (
    <div>
        <div className='hero'>
            <h1>Nothing can stop you</h1>
            <button>FIND OUT MORE</button>
        </div>
        <img onClick={goToRoutedPage} className='heroImage' src="" alt=""/>
    </div>
  )
}
 
export default Hero