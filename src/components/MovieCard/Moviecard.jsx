import React from 'react'
import MovieList from "../MovieList/Movielist.jsx"
import Pagination from "../Pagination/Pagination.jsx"
import { useGetMoviesQuery } from '../../services/Api.js'

function Moviecard() {
    const{data,isFetching, error} = useGetMoviesQuery();
    // console.log(data);
    return (
        <>
            <section className=' w-full flex flex-col justify-center items-center  '>
                <MovieList movies={data} />
                <Pagination />
            </section>
        </>
    )
}

export default Moviecard
