import React from 'react'
import Movie from '../Movie/Movie'

function Movielist({movies}) {
    return (
        <>
        <div className='h-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-10'>
            {
                movies?.results?.map((movie, index) => {
                    return<Movie key={index} index={index} movie={movie}/>
                })
            }
        </div>
        </>
    )
}

export default Movielist
