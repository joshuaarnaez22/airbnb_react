import React from 'react'
import Image from 'next/image'
import {SearchIcon,MenuIcon,UserCircleIcon,GlobeAltIcon} from "@heroicons/react/solid"
const Header = () => {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            <div className='relative flex items-center h-10 my-auto'>
            <Image className="cursor-pointer"
            src="https://links.papareact.com/qd3" 
            layout="fill"
            objectPosition="left"
            objectFit="contain"
            />
            </div>
            <div className="flex items-center md:border-2 md:shadow-sm rounded-full py-2">
                <input className="flex-grow pl-5 outline-none bg-transparent text-sm text-gray-400" type="text" placeholder="Start your search..." />
                <SearchIcon className="hidden md:inline-flex md:mx-2 h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer"/>
            </div>
            <div className="flex space-x-4 items-center justify-end text-gray-600">
                <p className="hidden md:inline-flex">Become a host</p>
                <GlobeAltIcon className="hidden md:inline-flex h-6 cursor-pointer"/>
                <div className="flex border-2 rounded-full p-1 space-x-2 items-center cursor-pointer">
                    <MenuIcon className="h-6"/>
                    <UserCircleIcon className="h-6"/>
                </div>
            </div>
        </header>
       
    )
}

export default Header
