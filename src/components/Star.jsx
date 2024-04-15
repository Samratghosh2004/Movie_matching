import React from 'react'
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

function Star({starVote, movie}) {
    //const rating = 6
    const star = starVote/2;
    const starPrinting = Array.from({length:5},(ele, index)=>{
        let n = index +0.5
        return (
            <span key={index} className=' text-yellow-400'>
            {
                (star >= index+1) ? (
                    <FaStar className=' text-base text-yellow-400'/>
                ) : (star >= n) ? (
                    <FaStarHalfAlt className=' text-base text-yellow-400' />
                ) :  (
                    <FaRegStar className=' text-base text-yellow-400'/>
                )
            }
            </span>
        )
    })

    return (
        <>
        <div className='flex justify-center items-center font-semibold text-base'>
            IMDb
            {starPrinting}
        </div>
        </>
    )
}

export default Star
