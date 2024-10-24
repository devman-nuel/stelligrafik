import React from 'react'
import './Team.css';


function Team() {
  return (
    <div className='team'>
        <div className='team-header'>
            <p>Our Team</p>
            <h2>Meet Our Incredible Team</h2>

            <div className='team-con'>
                <div>
                <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729766263/2151202445_qz3aug.jpg' alt=''></img>
                </div>

                <div>
                <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729766263/2149203576_tkdufu.jpg' alt=''></img>

                </div>
                <div>
                <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729766263/2149328287_ouaadw.jpg' alt=''></img>

                </div>
              
            </div>
        </div>
    </div>
  )
}

export default Team