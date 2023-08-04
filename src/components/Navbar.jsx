import React from 'react'
import logo from '../assets/Images/logo.png'

function Navbar() {
  return (
    <div>
        <div className="bg-white">
            <div className="flex-col flex">
                <div className="w-full border-b-2 border-gray-200">
                    <div className="bg-white h-24 justify-between items-center mx-auto px-4 flex">
                        <div>
                        <img src={logo} className="h-24 w-full}" alt="" />
                        </div>
                        <div className="lg:block mr-auto ml-40 relative w-6/12">
                            <p className="pl-3 items-center flex absolute inset-y-0 left-0 pointer-events-none">
                                <span className="justify-center items-center flex">
                                    <span className="justify-center items-center flex">
                                        <span className="items-center justify-center flex text-gray-400">
                                            <i className='bx bx-search' ></i>
                                        </span>
                                    </span>
                                </span>
                            </p>
                            <input placeholder="Type to search" type="search" className="border border-gray-300 
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 sm:text-sm w-full rounded-lg pt-2 pb-2 pl-10 px-3 py-2"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
