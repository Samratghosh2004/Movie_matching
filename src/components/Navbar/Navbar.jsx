import React, { useState } from 'react'
import toogle_light from '../../assets/night.png'
import toogle_dark from '../../assets/1449673.png'



    const Navbar = ({theme, setTheme}) =>{
        const toogle_mode  = () => {
            theme === 'light' ? setTheme('dark') : setTheme ('light');
        }
     return (
        <>
        <div className="w-full px-2 py-2 text-red-700  flex justify-center items-center bg-transparent/30" >
            <div className="w-[100%] border px-5 py-3  w-100% flex items-center justify-between shadow appearance-none bg-white">
                
                <h2 className=" font-sans-serif font-bold text-3xl">CINEMA.</h2>
               
                <input className="ring-2 ring-red-400 ring-offset-4 ring-offset-slate-400  dark:ring-offset-slate-700 ...    shadow appearance-none border rounded w-1/4 py-2 px-4 text-gray-700    leading-tight focus:outline-none focus:shadow-outline bg-slate-200 text-xl hidden sm:block"type="text" placeholder='Search your movie'/>

                <button className=" bg-red-400 hover:bg-red-600 text-white text-lg font-semibold py-2 px-10 border-b-4  border-red-950 rounded-3xl hover:border-bg-red-950 hover:text-slate-900 hidden sm:block">
                    Search
                </button>
               

                <img onClick={() => {toogle_mode()}} src={theme =='light' ? toogle_light : toogle_dark} alt="" className='toogle-icon w-12' />

            </div>
        </div>

        </>
    )
}

export default Navbar
