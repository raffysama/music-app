import React from 'react'
import MusicContext from '../MusicContext';
import { useContext } from 'react';
import Music from './Music';





function Home({handleSelectedSong,}) {

  const {musicsData} = useContext(MusicContext)
  return (
    
    <div className='bg-[#130729] w-full'>
      <h1 className='my-10 pl-10 text-slate-200 text-2xl'>Recommended</h1>
      <div className=''>
        <div>
            <div className='flex flex-wrap gap-10 pl-10 rounded-lg'>
              {musicsData.map((musicsData) => (
                <div 
                  className='cursor-pointer rounded-lg'
                  key={musicsData.id} 
                  onClick={() => handleSelectedSong(musicsData)}
                  >
                  <div className='rounded-lg w-44'>
                    <div className='pb-5 '>
                        <img src={musicsData.cover} alt='Album Cover' className='w-full rounded-lg '/>
                    </div>
                    <div className='text-slate-600'>
                        <div className=' font-poppins font-semibold text-slate-300'>{musicsData.name}</div>
                        <div className='pb-5 font-poppins font-extralight text-slate-500'>{musicsData.artist}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>               
        </div>
      </div>
      <Music handleSelectedSong={handleSelectedSong}/>
    </div>
  )
}

export default Home
