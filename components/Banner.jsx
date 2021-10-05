import React from 'react'
import Image from 'next/image'
const Banner = () => {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px]">
           <Image
           src="https://links.papareact.com/0fm"
           layout="fill"
           objectFit="cover"
           /> 
           <div className="absolute top-1/2 w-full text-center">
               <p className="text-sm sm:text-lg font-medium">Not sure where to go? Perfect.</p>
               <button className="py-4 px-10 rounded-full mt-3 font-bold shadow-md 
               bg-white text-purple-500 hover:shadow-lg active:scale-90 transition duration-150">I'm flexible</button>
           </div>
        </div>
    )
}

export default Banner