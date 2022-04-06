import React, {useContext} from 'react'
import MenuContext from '../context/MenuContext'
import { useNavigate} from 'react-router-dom'
import "../style/MenuList.css"
import { AiOutlineRight} from 'react-icons/ai'

function MenuList({menuList}) {
    const {setMenu}=useContext(MenuContext)
    const navigate = useNavigate();

    const goToRoutedPage = (element) => {
        navigate(`/${element}`)
        setMenu(element)
    }

  return (
    <div className='menulist'>
        {menuList.map((element, key) => (
            <div className='menuItemList'  onClick={() => goToRoutedPage(element)}>
                <h1 key={key}>{element} <span><AiOutlineRight/></span></h1> 
            </div>     
        ))}
    </div>
  )
}

export default MenuList