import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729669750/Group_1686553376_zzioph.png' alt=''></img>
            <p>Plantaura</p>
        </div>

        <nav>
            <li>About Us</li>
            <li>Innovation</li>
            <li>Reviews</li>
        </nav>

        <div className='nav-btn'>
         <span>Contact Us</span>
          <button>Schedule Call</button>
        </div>
    </div>
  )
}

export default Navbar