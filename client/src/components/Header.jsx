import { Menu } from 'antd'
import React from 'react'

function Header() {
  return (
    <div>
        <header className='header space'>
            <h3 className='text-2xl uppercase'>Paylane-cars</h3>
           <div>
            <Menu/>
           <h4>Menu</h4>
           </div>
        </header>
    </div>
  )
}

export default Header