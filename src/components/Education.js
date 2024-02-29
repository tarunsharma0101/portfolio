import React from 'react'

const Education = () => {
  return (
    <div className='flex flex-col justify-between bg-slate-300'>

        <div className='md:h-[15vh] h-12 bg-gray-800 text-slate-400 items-center flex' id='education'>
            <h1 className='m-10 md:text-6xl text-2xl md:font-thin  '>Education</h1>
        </div>

        <div className='bg-[#ffffff] md:m-8 m-4 shadow-xl shadow-black'>
            <div className='md:ml-20 m-4 md:mt-10 md:mb-10 '>
                <h1 className='md:text-4xl text-xl font-bold md:mb-2'>Inderprastha Engineering College - [2018-2022]</h1>
                <p className='md:text-2xl text-lg md:font-semibold md:mb-8 mb-6'>Ghaziabad, Uttar Pradesh</p>
                <h2 className='md:text-3xl text-xl font-semibold md:mb-2'>Degree : <span className='md:text-2xl text-lg font-normal'>Bachelor of Technology in Information Technology</span></h2>
                <h2 className='md:text-3xl text-xl font-semibold mb-2'>CGPA : <span className='md:text-2xl text-lg font-normal'>8.02</span></h2>
            </div>

            <div className='h-[1px] bg-black w-11/12 mx-auto'></div>

            <div className='md:ml-20 m-4 md:mt-10 md:mb-10 '>
                <h1 className='md:text-4xl text-xl font-bold md:mb-2'>Lakshya Public School - [2017-2018]</h1>
                <p className='md:text-2xl text-lg md:font-semibold md:mb-8 mb-6'>Baghpat, Uttar Pradesh</p>
                <h2 className='md:text-3xl text-xl font-semibold md:mb-2'>Degree : <span className='md:text-2xl text-lg font-normal'>Senior Secondary (PCM)</span></h2>
                <h2 className='md:text-3xl text-xl font-semibold mb-2'>CGPA : <span className='md:text-2xl text-lg font-normal'>7.3</span></h2>
            </div>

            
        </div>
    </div>
  )
}

export default Education