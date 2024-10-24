import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Service from '../../Components/Service/Service'
import Project from '../../Components/Project/Project'
import Team from '../../Components/Team/Team'

function Home() {
  return (
    <div>
       <Hero />
     <Service />
     <Project />
     <Team />
    </div>
  )
}

export default Home