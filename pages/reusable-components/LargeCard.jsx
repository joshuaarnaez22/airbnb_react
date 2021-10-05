import React from 'react'
import Image from "next/image"
const LargeCard = ({img,title,decription,buttontext}) => {
    return (
        <div className="relative my-16 cursor-pointer">
            <div className="relative h-96 min-w-[300px]">
            <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl "/>
            </div>
            <div className="absolute top-32 left-12">
            <h3 className="text-4xl w-64 font-bold">{title}</h3>
            <p>{decription}</p>
            <button className="text-white font-bold text-sm bg-gray-900 py-2 px-4 mt-3 rounded-xl hover:bg-red-400 hover:scale-105 transition transform duration-200 ease">{buttontext}</button>
            </div>
        </div>
    )
}

export default LargeCard
