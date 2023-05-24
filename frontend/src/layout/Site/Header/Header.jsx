import React from 'react'
import { Link } from 'react-router-dom'
import '../Header/Header.css'
const Header = () => {
  return (
    <div>
      <ul>
       <li> <Link to=''>Home</Link></li>
        <li><Link to='add'>Add</Link></li>
      </ul>
    </div>
  )
}

export default Header
