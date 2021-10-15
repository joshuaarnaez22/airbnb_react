import React, { useState } from 'react'
import Image from 'next/image'
import {SearchIcon,MenuIcon,UsersIcon,UserCircleIcon,GlobeAltIcon} from "@heroicons/react/solid"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router'
const Header = ({placeholder}) => {
    const [searchInput , setSearchInput] = useState("")
    const [startDate,setstartDate] = useState(new Date())
    const [endDate,setendDate] = useState(new Date())
    const [guests,setGuests] = useState(1)
    const router = useRouter()
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
      }

      const handeChange = (ranges) => {
        setstartDate(ranges.selection.startDate)
        setendDate(ranges.selection.endDate)
      }

      const search = () => {
        router.push({
            pathname : '/search',
            query : {
                location : searchInput,
                start_date : startDate.toISOString(),
                end_date : endDate.toISOString(),
                numberOfGuests : guests

            }
        })
      }
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 ">
            <div onClick={()=>router.push('/')} className='relative flex items-center h-10 my-auto'>
            <Image className="cursor-pointer"
            src="https://links.papareact.com/qd3" 
            layout="fill"
            objectPosition="left"
            objectFit="contain"
            />
            </div>
            <div className="flex items-center md:border-2 md:shadow-sm rounded-full py-2">
                <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="flex-grow pl-5 outline-none bg-transparent text-sm text-gray-400" type="text" placeholder={placeholder ||' Start your search...'} />
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
            {searchInput && (
                <div className="flex flex-col col-span-3 overflow-hidden overflow-x-scroll md:mx-auto md:overflow-hidden">
                   <DateRangePicker
                    ranges={[selectionRange]}
                    minDate={new Date()}
                    rangeColors= {["#F87171"]}
                    onChange={handeChange}
                    
                    />
                    <div className="flex items-center ">
                        <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
                        <div className="flex items-center shadow-md hover:shadow-lg hover:scale-105 hover:transition transform duration-200 ease-out rounded-xl p-1">
                        <UsersIcon className="h-5 pr-2"/>
                        <input type="number" value={guests} min={1} className="bg-transparent outline-none w-12 font-bold text-sm text-purple-500" onChange={(e => setGuests(e.target.value))}/>
                        </div>
                    </div>
                    <div className="flex justify-around mt-2">
                        <button onClick={()=> setSearchInput("")} className="text-gray-400 shadow-md px-5 py-1 rounded-lg hover:shadow-lg hover:scale-105 hover:transition transform duration-200 ease-out">Cancel</button>
                        <button onClick={search} className="text-red-500 shadow-md px-5 py-1 rounded-lg hover:shadow-lg hover:scale-105 hover:transition transform duration-200 ease-out">Search</button>
                     </div>
                </div>
            )}

        </header>
       
    )
}

export default Header


