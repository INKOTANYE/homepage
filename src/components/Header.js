import React, {  useState, useContext } from 'react'
import "../style/Header.css" 
import logo from "../pictures/logo.png"
import MenuContext from '../context/MenuContext'
import { useNavigate} from 'react-router-dom'

function Header() {
    const {setMenu}=useContext(MenuContext)
    const navigate = useNavigate();

    const [menuList]=useState([
        "SHOW ALL TYRES",
        "FIND A DEALER",
        "GUIDES & VIDEOS",
        "GO WITH",
        "SERVICE & HELP"
    ])

    const goToHomePage = () => {
        navigate(`/`)
        setMenu("")
    }

    const goToRoutedPage = (element) => {
        navigate(`/${element}`)
        setMenu(element)
    }

  return (
    <div className='header'>
        <img className='logo' src={logo} alt="Alca Digital" onClick={goToHomePage}/>
        <nav className='menu'>
            {menuList.map((element, key) => (
                <div className='menuItem'  onClick={() => goToRoutedPage(element)}>
                    <h1 key={key}>{element}</h1>
                </div>     
            ))}
        </nav>
    </div>
  )
}

export default Header