import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='Navbar'>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/products"><li>Products</li></Link>
        <Link to="/about"> <li>About</li></Link>
        <Link to="/contact"> <li>Contact</li></Link>
      </ul>
      <button>Get Statted</button>
    </div>
  )
}

export default Navbar;