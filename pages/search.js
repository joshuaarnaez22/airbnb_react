import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Header,Footer } from '../components'
import {format} from 'date-fns'
const Search = () => {
    const router = useRouter()
    if(!router.isReady){
        return null
    }
    const {location,start_date,end_date,numberOfGuests} = router.query
    const formatted_start_date = format(new Date(start_date), 'dd MMMM yy')
    const formatted_end_date = format(new Date(end_date), 'dd MMMM yy')

    return (
        <div>
            <Header/>
            <main className="flex">
                <section className="px-5 pt-14 flex-grow">
                    <p className="text-sm">300+ Stays - {formatted_start_date} - {formatted_end_date} - for <span className="font-bold">{numberOfGuests}</span> guests</p>
                    <h1 className="text-3xl font-semibold mb-6">Stays in <span className="text-red-400 capitalize">{location}</span></h1>

                    <div className="hidden md:inline-flex text-gray-500 space-x-3">
                        <button className="button">Cancellation Flexibility</button>
                        <button className="button">Type of Place</button>
                        <button className="button">Price</button>
                        <button className="button">Room and Beds</button>
                        <button className="button">More Filters</button>
                    </div>
                </section>
            </main>
            {/* <Footer /> */}
        </div>
    )
}

export default Search
