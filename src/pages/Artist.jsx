import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MusicContext from '../MusicContext';
import { useContext } from 'react';

function Artist() {

    const {musicsData} = useContext(MusicContext)
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      
      <div>
      
            <div className='flex overflow-hidden gap-10 pl-10 rounded-lg'>
            <Slider {...settings}>
              {musicsData.map((musicsData) => (
                <div 
                  className='cursor-pointer rounded-lg'
                  key={musicsData.id} 
                  // onClick={() => handleSelectedSong(musicsData)}
                  >
                      <div className='rounded-lg w-64'>
                        <div className='pb-5'>
                            <img src={musicsData.cover} alt='Album Cover' className='w-full rounded-lg '/>
                        </div>
                        <div className='text-slate-600'>
                            <div className='pl-10  font-poppins font-semibold text-slate-100'>{musicsData.name}</div>
                            <div className='pl-10 pb-5 font-poppins font-extralight text-slate-100'>{musicsData.artist}</div>
                        </div>
                    </div>
                </div>
              ))}
                </Slider>
            </div>   

	  </div>
    )
  }
  
  export default Artist
  