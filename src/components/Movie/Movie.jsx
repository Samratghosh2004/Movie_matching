import React from 'react'
import Star from '../Star'
import { Link } from 'react-router-dom'

function Movie({movie, index}) {
    return (
    <>
        <div className='  h-fit w-[252px] flex-col justify-center items-center text-red-500 text-xl my-4 mx-7 '>
            <Link to={`/movie/${movie?.id}`}>
                <div className='w-[250px] bg-cover'>
                    <img 
                    src={movie?.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`:`https://www.fillmurray.com/200/300`} 
                    alt={movie?.title}  />
                </div>
            </Link>
            <div className="">
            <h1 className="font-bold items-center whitespace-nowrap overflow-hidden overflow-ellipsis"> {movie?.title}</h1>
            <Star starVote={movie?.vote_average} />
            </div>

        </div>
    </>
    )
}

export default Movie
