import React from 'react'

const TopBar = ()  =>{
    return (
        <>
        <div className=' bg-tranparent text-red-500 text-lg font-bold flex gap-5 items-center justify-center overflow-x-auto '>
            
                <button >
                 <p className=' px-4 py-3 border-[3px] border-slate-400 rounded-xl'>Action</p>
                </button>
                <button >
                 <p className=' px-4 py-3 border-[3px] border-slate-400 rounded-xl'>Crime</p>
                </button>
                <button >
                 <p className=' px-4 py-3 border-[3px] border-slate-400 rounded-xl'>Thriller</p>
                </button>
                <button >
                 <p className=' px-4 py-3 border-[3px] border-slate-400 rounded-xl'>Comedy</p>
                </button>
                <button >
                 <p className=' px-4 py-3 border-[3px] border-slate-400 rounded-xl'>Horror</p>
                </button>
                <button >
                 <p className=' px-4 py-3 border-[3px] border-slate-400 rounded-xl'>Romance</p>
                </button>
                <button >
                 <p className=' px-4 py-3 border-[3px] border-slate-400 rounded-xl'>Series</p>
                </button>
                <button >
                 <p className=' px-4 py-3 border-[3px] border-slate-400 rounded-xl'>Drama</p>
                </button>
                <button >
                 <p className=' px-4 py-3 border-[3px] border-slate-400 rounded-xl'>Adventure</p>
                </button>
        </div>
        </>
    )
}

export default TopBar
