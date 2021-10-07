import Image from 'next/image'
import React from 'react'
import {StarIcon} from '@heroicons/react/solid'
import {HeartIcon} from '@heroicons/react/outline'

const InfoCard = ({img,location,title,description,lat,long,price,star,total}) => {
    return (
        <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg 
        transition transform duration-200 ease first:border-t">
            <div className="relative h-48 w-40 md:w-80 flex-shrink">
                <Image className="rounded-lg w-40" src={img} layout="fill" objectFit="cover"/>
            </div>
            <div className="flex flex-col pl-5 flex-grow">
              <div className="flex justify-between">
                <p className="">{location}</p>
                 <HeartIcon className="h-7 cursor-pointer"/>     
            </div>
            <h4 className="text-xl font-bold">{title}</h4>
            <div className="border-b w-10 pt-2"/> 
             <p className="text-sm text-gray-500 max-w-sm lg:max-w-lg flex-grow">{description}</p>
             
               <div className="flex justify-between ">
                <p className="flex items-end"><StarIcon className="h-5 text-red-400"/>
                {star}
             </p>
             <div>
                 <p className="text-xl font-bold lg:text-2xl">{price}</p>
                 <p className="text-right font-extralight">{total}</p>
             </div>
                </div>
          
            </div>
        </div>
    )
}

export default InfoCard
