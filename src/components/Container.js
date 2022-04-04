import React, {useContext } from 'react'
import Header from './Header'
import { Routes, Route} from 'react-router-dom'
import RoutedPage from './RoutedPage'
import HomePage from './HomePage'
import MenuContext from '../context/MenuContext'

function Container() {

  const {menu}=useContext(MenuContext)

  return (
    <div className='container'>
        <Header/>
        <div className="site-layout-content">
            <Routes>
                <Route path='/' element={<HomePage/>} />
                <Route path='/:menu' element={<RoutedPage menu={menu}/>} />
                <Route path='/learnmore/:menu' element={<RoutedPage menu={menu}/>} />
                <Route path='/findadealer/:menu' element={<RoutedPage menu={menu}/>} />
            </Routes>
        </div>
    </div>
  )
}

export default Container