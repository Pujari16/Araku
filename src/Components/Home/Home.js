import React from 'react'
import Slider from '../HomeSlider/Slider'
import './Home.css'
import OurStory from '../HomeHistory/History'
import Rooms from '../Rooms/Rooms'
const Home = () => {
  return (
    <div className='home-container'>
      <Slider/>
       <div className='our-story'>
       <OurStory/>
       </div>

       <div>
         <Rooms/>
       </div>

       {/* <div>
         <Footer/>
       </div> */}
    </div>
  )
}

export default Home
