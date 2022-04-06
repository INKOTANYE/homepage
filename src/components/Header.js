import React, {  useState, useContext } from 'react'
import "../style/Header.css" 
import logo from "../pictures/logo.png"
import MenuContext from '../context/MenuContext'
import { useNavigate} from 'react-router-dom'
import { BsList} from 'react-icons/bs'
import { AiOutlineClose} from 'react-icons/ai'

function Header( {open, setOpen, menuList}) {
    const {setMenu}=useContext(MenuContext)
    const navigate = useNavigate();


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
        <div className='logo-container'>
            <img className='logo' src={logo} alt="Alca Digital" onClick={goToHomePage}/>
        </div>
        
        <nav className='menu'>
            {menuList.map((element, key) => (
                <div className='menuItem'  onClick={() => goToRoutedPage(element)}>
                    <h1 key={key}>{element}</h1>
                </div>     
            ))}
        </nav>

        <nav className='small-menu'>
            <div onClick={()=>setOpen(!open)}>
                {!open && <BsList id="list"/>}
                {open && <AiOutlineClose id="list"/>}
            </div>

        </nav>
    </div>
  )
}

export default Header