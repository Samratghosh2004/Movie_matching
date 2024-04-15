import React from 'react'

function Pagination() {
    return (
        <>
        <div className='flex space-x-3 '>
        <button className=" bg-red-400 hover:bg-red-600 text-white text-lg font-semibold py-2 px-10 border-b-4  border-red-950 rounded-3xl hover:border-bg-red-950 hover:text-slate-900">
            ⇦Prev
        </button>

        <button className=" bg-red-400 hover:bg-red-600 text-white text-lg font-semibold py-2 px-10 border-b-4  border-red-950 rounded-3xl hover:border-bg-red-950 hover:text-slate-900 ">
            Next⇨
        </button>
        </div>
        </>
    )
}

export default Pagination
