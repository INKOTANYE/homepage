import React, {useContext, useState } from 'react'
import Header from './Header'
import { Routes, Route} from 'react-router-dom'
import RoutedPage from './RoutedPage'
import HomePage from './HomePage'
import MenuContext from '../context/MenuContext'

function Container() {

  const {menu}=useContext(MenuContext)
  const [open, setOpen]=useState(false)

  const [menuList]=useState([
    "SHOW ALL TYRES",
    "FIND A DEALER",
    "GUIDES & VIDEOS",
    "GO WITH",
    "SERVICE & HELP"
])

  return (
    <div>
        <Header open={open} setOpen={setOpen} menuList={menuList}/>  
        <div>
            <Routes>
                <Route path='/' element={<HomePage open={open} setOpen={setOpen} menuList={menuList}/>} />
                <Route path='/:menu' element={<RoutedPage menu={menu}/>} />
                <Route path='/learnmore/:menu' element={<RoutedPage menu={menu}/>} />
                <Route path='/findadealer/:menu' element={<RoutedPage menu={menu}/>} />
            </Routes>
        </div>
    </div>
  )
}

export default Container