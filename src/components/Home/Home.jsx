import React, { useEffect } from 'react'
import './Home.scss';
import Video from '../../Assets/video.mp4';
import { AiOutlineSwapRight } from "react-icons/ai";
import image1 from '../../Assets/destination1.jpg';
import image2 from '../../Assets/destination2.jpg';
import image3 from '../../Assets/destination3.jpg';
import image4 from '../../Assets/destination4.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
  useEffect(()=>{
     Aos.init({duration: 2000})
  }, [])

  return (
    <div className='Home'>
      <div className='videoBg'>
        <video src={Video} autoPlay loop muted></video>
      </div>
      <div className="sectionText">
        <h1 data-aos='fade-up'>Unlock Your Travel Dreams With Us!</h1>
        <p data-aos='fade-up'>Discover the India's most adventurous nature, life is so short for a trip.</p>
        <button className='btn flex' data-aos='fade-up'>GET STARTED <AiOutlineSwapRight className='icon' /></button>
      </div>

      <div className="popularPlaces">
        <div className="content">
          <h3 data-aos='fade-up'>Popular Places</h3>
          <div className="images flex">
            <img src={image2} alt="Destination Images" />
            <img src={image1} alt="Destination Images" />
            <img src={image3} alt="Destination Images" />
            <img src={image4} alt="Destination Images" />
          </div>
        </div>
      </div>
      {/* <img src={image1} alt="Destination Images" /> */}

    </div>
  )
}

export default Home