import React from 'react'
import './Gallery.scss';
import { TiLocation } from 'react-icons/ti';
import Image1 from '../../Assets/Image1.jpg';
import Image2 from '../../Assets/Image2.jpg';
import Image3 from '../../Assets/Image3.jpg';
import Image4 from '../../Assets/Image4.jpg';
import Image5 from '../../Assets/Image5.jpg';
import Image6 from '../../Assets/Image6.jpg';
import Image7 from '../../Assets/Image7.jpg';
import Image8 from '../../Assets/Image8.jpg';
import Image9 from '../../Assets/Image9.jpg';
import Image10 from '../../Assets/Image10.jpg';
import Image11 from '../../Assets/Image11.jpg';
import Image12 from '../../Assets/Image12.jpg';


const galleryImages = [
  {
    id: 1,
    image: Image12,
    name: 'Prem Mandir',
    location: 'Vrindavan, Uttar Pradesh',
  },
  {
    id: 2,
    image: Image10,
    name: 'Kanchanjunga ',
    location: 'Sikkim',
  },
  {
    id: 3,
    image: Image9,
    name: 'Krang Shuri Waterfalls',
    location: 'Meghalaya',
  },
  {
    id: 4,
    image: Image1,
    name: 'Golden Temple',
    location: 'Amritsar, Punjab',
  },
  {
    id: 5,
    image: Image2,
    name: 'Munnar',
    location: 'Kerala',
  },

  {
    id: 6,
    image: Image3,
    name: 'Taj Mahal',
    location: 'Delhi',
  },
  {
    id: 7,
    image: Image4,
    name: 'Victoria Memorial Museum',
    location: 'Kolkata',
  },
  {
    id: 8,
    image: Image11,
    name: 'Hawa Mahal ',
    location: 'Jaipur, Rajastan',
  },
  {
    id: 9,
    image: Image5,
    name: 'Dal Lake',
    location: 'Srinagar, Jammu and Kashmir',
  },
  {
    id: 10,
    image: Image6,
    name: 'Kedarnath',
    location: 'Uttarakhand',
  },
  {
    id: 11,
    image: Image7,
    name: 'Leh Ladakh',
    location: 'Jammu and Kashmir',
  },
  {
    id: 12,
    image: Image8,
    name: 'Arambol',
    location: 'Goa',
  },
];

const Gallery = () => {
  return (
    <div className='Gallery section container'>
      <div className="secContainer">
        <div className="secTitle">
          <span className='redText' data-aos='fade-up'>EXPLORE NOW</span>
          <h3 data-aos='fade-up'>Check Destination Gallery</h3>
          {/* <p data-aos='fade-up'>Fill in the fields bellow to find the bet spot for your next tour.</p> */}
        </div>
        <div className="destinationContainer grid">
          {galleryImages.map((gallery) => {
            return (
                <div className="singleDestination" key={gallery.id} data-aos='fade-up'>
                  <div className="imgDiv" data-aos='fade-up'>
                    <img src={gallery.image} alt="Destination Image" />
                    <div className='descInfo flex'>
                      <div className="text">
                        <span className="name">{gallery.name}</span>
                        <p className='flex'>
                          <TiLocation className='icon' />
                          {gallery.location}
                        </p>
                      </div>
                      {/* <span className="rating">
                        {gallery.rating}
                      </span> */}
                    </div>
                  </div>
                </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default Gallery