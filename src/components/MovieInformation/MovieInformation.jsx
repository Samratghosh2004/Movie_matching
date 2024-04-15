import React, { useState } from 'react'
import Star from '../Star'
import { useParams } from 'react-router-dom'
import { useGetMovieQuery, } from '../../services/Api';


function Modal({data, mActive, mClose})  {
    if(!mActive) return null;
    return (
        <div onClick={() => mClose}>
            {data?.videos?.results?.length >0 && (
                <iframe autoPlay className=' aspect-video w-[500px] ' title='Trailer' src={`https://www.youtube.com/embed/${data.videos.results[0].key}`} allow='autoplay' />
            )}
        </div>

    )
}
function MovieInformation() {

    const[mActive, setmActive] = useState(false);

    const{id} = useParams();
    console.log(id);

    const {data, isFetching, error} = useGetMovieQuery(id);
    // console.log(data);
    return (
        <>
        <section className=' w-full h-auto flex flex-col justify-center items-center lg:flex-row lg:h-screen '>
            <div className=" w-full   flex justify-center items-center">
                <div className=' w-[62%] my-6 overflow-hidden  md:w-[46%] lg:w-[53%] xl:w-[51%] 2xl:w-[48%]'>
                    <img className=' shadow-md shadow-amber-200 rounded-xl w-full'
                    src={data?.poster_path ? `https://image.tmdb.org/t/p/w500/${data?.poster_path}`:`https://www.fillmurray.com/200/300`} 
                    alt={data?.title}  />

                    <div className=" w-full mt-5 mb-5 flex justify-center items-center">
                    <button className='relative top-0 left-0 w-4/6 h-[50px] m-0 flex justify-center items-center before:content-[""] before:absolute before:left-1/2 before:translate-x-[-50%] before:bottom-[-5px] before:w-[30px] before:h-[10px] before:rounded-[10px] before:duration-500 before:delay-400 hover:before:bottom-0 hover:before:h-1/2 hover:before:w-[80%] hover:before:rounded-[30px] after:content-[""] after:z-[-1] after:absolute after:left-1/2 after:translate-x-[-50%] after:top-[-5px] after:w-[30px] after:h-[10px] after:rounded-[10px] after:duration-500 after:delay-400 hover:after:top-0 hover:after:h-1/2 hover:after:w-[80%] hover:after:rounded-[30px] before:bg-[#ff1f71] before:[box-shadow:0_0_5px_#ff1f71,0_0_15px#ff1f71,0_0_30px#ff1f71,0_0_60px#ff1f71] after:bg-[#ff1f71] after:[box-shadow:0_0_5px_#ff1f71,0_0_15px#ff1f71,0_0_30px#ff1f71,0_0_60px#ff1f71]'>
                    <a href="#" className='absolute top-0 left-0 text-lg w-full h-full flex justify-center items-center bg-[rgba(255,215,0,0.1)] shadow-[0 15px 15px rgba(0, 0, 0, 0.3)] border-t-[1px solid rgba(255, 255, 255, 0.1)] border-b-[1px solid rgba(255, 255, 255, 0.1)] rounded-[30px] p-[10px] tracking-[1px] no-underline overflow-hidden text-black font-semibold z-1 duration-500 backdrop-blur-[15px] before:absolute before:t-0 before:l-0 before:w-1/2 before:h-full before:bg-[linear-gradient(to_left,_rgba(255,_255,_255,_0.15),_transparent)] before:skew-x-[45deg] before:translate-x-0 before:duration-500 before:blur-0 hover:tracking-[3px] hover:before:skew-x-[45deg] hover:before:translate-x-[200px] '>Watch This</a>
                     </button>



                </div>
                    <div className=" ">
                        <button onClick={() => {
                            setmActive(true);
                        }} className="border border-slate-300 py-3 px-5 rounded-lg">Trailer</button>
                        <Modal data={data} mActive={mActive} mClose={() => {
                            setmActive(false);
                        }} />
                    </div>
                </div>
            </div>




            <div className="flex flex-col  pt-8 justify-start items-center w-full  p-4 ">
                <div className=" w-[70%]">
                    <div className=" text-center text-red-500">
                        <h1 className=" text-4xl font-bold">
                            {data?.title}
                        </h1>
                        <p className=" text-lg font-semibold">
                            {data?.tagline}
                        </p>
                    </div>
                    <div className="">
                        <Star starVote={data?.vote_average}/>
                        <div className=" text-xl text-yellow-700 font-semibold">
                            {data?.runtime}min / {data?.release_date} / {data?.original_language}
                        </div>
                    </div>
                    <div className="text-red-500 font-semibold text-lg overflow-x-auto ">
                        {/* ddjfdfklndkfdofj */}
                        <button className=' flex gap-3' id='btn' >
                            {data?.genres.map((genre,index) => (
                                <p key={index} className=' px-3 py-2 border-[3px] border-slate-400 rounded-xl '>
                                    <span className=''>{genre?.name}</span>
                                </p>
                            ))}
                                

                        </button>


                    </div>
                    <div className="text-red-500 font-semibold text-lg">{data?.overview}</div>
                    <div className="">
                        <h1 className=" text-slate-400 text-2xl font-semibold">Actors :</h1>
                        <div className=" flex flex-wrap justify-center items-center gap-2 ">
                            {/* <img src="https://yt3.googleusercontent.com/ytc/AIf8zZS6XDo-M7dlTyolU_yBAp-cmqn0EfZ8AGkKa9yItg=s900-c-k-c0x00ffffff-no-rj" alt="jfodihfofidh" />
                            <h1 className='text-5xl'>fkldnkjbd</h1> */}
                           {data?.credits?.cast.map((character, index) =>(
                                <div key = {index}
                                className='mt-2 flex w-[100px] flex-col items-center justify-start'>
                                    <img className='w-[99px] h-[146px] rounded-lg object-cover' src={character?.profile_path?`https://image.tmdb.org/t/p/w500/${character?.profile_path}`:"https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg"} alt='' />
                                    <p className='mt-2 w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-center text-red-500 font-semibold'>{character?.name}</p>
                                </div>
                           )).slice(0,5)}
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </section>
        </>
    )
}

export default MovieInformation
