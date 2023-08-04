import React from 'react'
import { Link } from 'react-router-dom'
// import AllMusic from './AllMusic'

// import MusicContext from '../MusicContext'
// import { useContext } from 'react'

function SideBars() {

  // const {musics} = useContext(MusicContext);
  // const defaultColor = 'rgb(2 6 23)'
  

  return (
    <>
      <div className="min-h-screen flex flex-row bg-[#0c021c] ">
        <div className="flex flex-col w-60 bg-[#0c021c] ">
          <ul className="flex flex-col py-16 px-5">
            <li>
              <div className="flex flex-row items-center h-8">
                <div className="text-xl font-bold tracking-wide text-slate-500">Your library</div>
              </div>
            </li>
            <li>
              <Link to="/" className="flex flex-row  items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className='bx bx-home text-slate-500 '></i></span>
                <span className="text-sm font-medium text-slate-500">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/music" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className='bx bx-music text-slate-500'></i></span>
                <span className="text-sm font-medium text-slate-500">All Music</span>
              </Link>
            </li>
            <li>
              <Link to="/artist" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-user text-slate-500"></i></span>
                <span className="text-sm font-medium text-slate-500">Artist</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* <AllMusic /> */}
    </div>

  </>
  )
}

export default SideBars
