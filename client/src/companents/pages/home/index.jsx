import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import LearnFrom from './learn from'
import MessageUs from './message us'
import OurPrograms from './our programs'
import OurTeachers from './our teachers'
import Strive from './strive'

const Home = (props) => {
    useEffect(() => {
     props.setHeader(false)
    }, [])
    
  return (
    <div>
           <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <LearnFrom/>
      <OurPrograms/>
      <Strive/>
      <OurTeachers/>
      <MessageUs/>
    </div>
  )
}

export default Home
