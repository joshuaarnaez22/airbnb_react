import React from 'react'
import Image from "next/image"
const MediumCard = ({img,title}) => {
    return (
        <div className="cursor-pointer hover:scale-90 transition transform duration-300 ease-in">
            <div className="relative h-80 w-80 ">
                <Image src={img} layout="fill" className="rounded-xl"/>
            </div>
            <h3 className="text-2xl mt-3">{title}</h3>

        </div>
    )
}

export default MediumCard
