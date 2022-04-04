import {createContext, useState} from 'react'

const MenuContext=createContext(null)

export const MenuProvider = ({children}) => {
    const [menu, setMenu]=useState("")

    const values={menu, setMenu}

    return <MenuContext.Provider value={values}>{children}</MenuContext.Provider>
}

export default MenuContext