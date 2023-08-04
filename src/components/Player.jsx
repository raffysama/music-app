import React from 'react'

import {AiFillCloseCircle} from 'react-icons/ai';


function Player({handleModal,currentSong}) {
  

  return (
  <> 
    <div className="relative z-10 animated fadeIn faster">
      <div className="fixed inset-0 backdrop-blur-sm bg-white/3  transition-opacity"></div>
        <div div className="fixed backdrop-blur-sm bg-white/30 inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-[#271c3b] text-left shadow-xl transition-all w-1/4">      
              <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4 rounded-b-lg "
                  style={{
                    background: `linear-gradient( ${currentSong.color[0]}, #271c3b)`,
                  }}>
                <div className=''>
                  <h1 className='text-center text-4xl font-kanit font-bold text-neutral-100 my-5'>Now Playing</h1>
                  <div className="mt-3 ">
                      <AiFillCloseCircle className='text-neutral-100 absolute top-2 right-1 cursor-pointer' 
                      size={30} 
                      onClick={handleModal}/>
                    <div className='flex justify-center items-center'>
                      <img src={currentSong.cover} alt='Album Cover' className='w-96 h-full rounded-full animate-spin  mr-3' />
                    </div>                
                  </div>                
                </div>
              </div>
              <div>
                <div className='text-slate-200 text-center font-kanit text-2xl'>{currentSong.name}</div>
                <div className='mb-5 text-center font-poppins font-extralight text-slate-200'>{currentSong.artist}</div>              
              </div>
            </div>
          </div>
        </div>
    </div>
  </>
  )
}

export default Player
