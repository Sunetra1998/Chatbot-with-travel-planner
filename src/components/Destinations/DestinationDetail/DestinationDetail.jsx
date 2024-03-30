import React, { useEffect } from 'react';
import { TiLocation } from 'react-icons/ti';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './DestinationDetail.scss';
import Image1 from '../../../Assets/Image1.jpg';
import Image2 from '../../../Assets/Image2.jpg';
import Image3 from '../../../Assets/Image3.jpg';
import Image4 from '../../../Assets/Image4.jpg';
import Image5 from '../../../Assets/Image5.jpg';
import Image6 from '../../../Assets/Image6.jpg';
import Image7 from '../../../Assets/Image7.jpg';
import Image8 from '../../../Assets/Image8.jpg';


const destinations = [
  {
    id: 1,
    image: Image1,
    name: 'Golden Temple',
    location: 'Amritsar, Punjab',
    rating: 4.7
  },
  {
    id: 2,
    image: Image2,
    name: 'Munnar',
    location: 'Kerala',
    rating: 4.3
  },
  {
    id: 3,
    image: Image3,
    name: 'Taj Mahal',
    location: 'Delhi',
    rating: 4.9
  },
  {
    id: 4,
    image: Image4,
    name: 'Victoria Memorial Museum',
    location: 'Kolkata',
    rating: 5
  },
  {
    id: 5,
    image: Image5,
    name: 'Dal Lake',
    location: 'Srinagar, Jammu and Kashmir',
    rating: 4.3
  },
  {
    id: 6,
    image: Image6,
    name: 'Kedarnath',
    location: 'Uttarakhand',
    rating: 5
  },
  {
    id: 7,
    image: Image7,
    name: 'Leh Ladakh',
    location: 'Jammu and Kashmir',
    rating: 4.2
  },
  {
    id: 8,
    image: Image8,
    name: 'Arambol',
    location: 'Goa',
    rating: 4.5
  },
];
const DestinationDetail = ({ match }) => {
  useEffect(() => {
    if (match && match.params && match.params.id) {
      Aos.init({ duration: 2000 });
    }
  }, [match]);


  return (
    <div className='DestinationDetail section container'>
      <div className="secContainer">
      <div className="secTitle">
          <h3 data-aos='fade-up'>Find Your Dream Destinations Here...</h3>
        </div>
        <div className="destinationContainer grid">
          {destinations.map((destination) => {
            return (
              <div className="singleDestination" key={destination.id} data-aos='fade-up'>
                <div className="imgDiv" data-aos='fade-up'>
                  <img src={destination.image} alt="Destination Image" />
                  <div className='descInfo flex'>
                    <div className="text">
                      <span className="name">{destination.name}</span>
                      <p className='flex'>
                        <TiLocation className='icon' />
                        {destination.location}
                      </p>
                    </div>
                    <span className="rating">
                      {destination.rating}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
