import React from 'react'
import {Link} from 'react-router-dom'

import './Header.css'

const Header = (props) => {
  return (
    <header>
      <Link to="/">
          <h1>
            <span className='car-word'>Pauline's</span>
            <span className='cdr-word'>Perfect Patisserie</span>
          </h1>
      </Link>
        <div className="cartLink">
            <Link to="/order">View Shopping Cart</Link>
        </div>
    </header>
  )
}

export default Header
