import React from 'react';
import './Project.css';

function Project() {
  return (
    <div className='project'>
        <div className='project-header'>
          <h2  data-animation='header'><span>Explore our <span className='coloured-text'>green projects</span> today.</span></h2>
        </div>

        <div className='project-con'>
            <div className='project-box'>
                 <p>EcoLiving Initiative</p>
                 <span>Sustainable, Healthy, Future</span>
                 <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729748828/38268_s5sfgw.jpg' alt='EcoLiving Initiative'></img>
            </div>

            <div className='project-box'>
                 <p>FutureRoots Foundation</p>
                 <span>Growth, Environment, Responsibility</span>
                 <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729748829/11969_tgymzq.jpg' alt='FutureRoots Foundation'></img>
            </div>

            <div className='project-box'>
                 <p>GreenPath Communities</p>
                 <span>Eco-friendly, Empowered, Collaborative</span>
                 <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729748832/2150196693_kw0cag.jpg' alt='GreenPath Communities'></img>
            </div>

            <div className='project-box'>
                 <p>RenewGreen Projects</p>
                 <span>Renewable, Sustainable, Change</span>
                 <img src='https://res.cloudinary.com/dxnukbo0u/image/upload/v1729748831/2150196696_dkz4jg.jpg' alt='RenewGreen Projects'></img>
            </div>
        </div>
    </div>
  );
}

export default Project;
