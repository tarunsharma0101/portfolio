import React from 'react';
import WIPRO from '../utils/images/Wipro_Limited.png';
import ONEoBIT from '../utils/images/OneObit.jpg';

const Experience = () => {
  return (
    <div className='bg-slate-300'>
        <div className='md:h-[15vh] h-12 bg-gray-800 text-slate-400 items-center flex '>
            <h1 className='m-10 md:text-6xl text-2xl md:font-thin ' id='experience'>Experience</h1>
        </div>

        <div className='flex md:flex-row flex-col justify-center '>
          <div className='md:m-14 m-4 rounded-sm bg-[#ffffff] md:w-[650px] shadow-xl shadow-black'> 
          <div className='flex items-center  font-bold justify-between'>
            <div className='flex items-center'>
            <img className='md:w-24 w-12 m-5 md:mr-5 mr-2' src={WIPRO} alt='wipro' />
            <h1 className='font-bold text-[.75rem] md:text-2xl'>Wipro Limited</h1>
            </div>
            <div className='text-[.70rem] md:text-xl font-semibold md:mr-10 text-slate-700 mr-3'>
              <p>Project Engineer</p>
            </div>
          </div>

          <div className='h-[1.5px] bg-black w-11/12 mx-auto'></div>

          <div className='md:m-10 ml-6 mr-2 mt-2 '>
            <ul className="list-disc text-lg">
              <li className='mb-2 '>Prepared test cases and document test results, capturing defects and issues in a clear and concise manner.
              Explored ways to visualize and send a daily report of test results to team members</li>
              <li className='mb-2'>Ensure that all project documentation is up-to-date and meets quality standards. Assist project managers with project
scheduling, tracking, and reporting.</li>
              <li className='mb-2' >Participate in code reviews and contribute to software architecture discussions, working closely with cross-functional
teams, including developers, business analysts, and project managers, to understand project requirements and ensure
comprehensive test coverage.</li>
              <li>Worked on Kellogg’s SAP ABAP based Project. Maintained accurate records of documents, code and issue resolutions.</li>
            </ul>
          </div>

          <div className='bg-slate-600 md:flex  items-center md:h-12 mt-12 text-center md:mt-[104px]'>
            <h1 className='md:ml-5 text-xl font-semibold'>APRIL 2022 - MAY 2023 <span className='md:ml-10 font-serif md:inline-block hidden'>Greater Noida</span></h1>
            <p className='md:hidden font-bold text-lg'>Greater Noida</p>
          </div>

          </div>

          <div className='md:m-14 m-4 rounded-sm md:w-[650px]  bg-[#ffffff] shadow-xl shadow-black'> 

          <div className='flex items-center  font-bold justify-between'>
            <div className='flex items-center'>
            <img className='md:w-20 w-12 m-5 md:mr-8 mr-2' src={ONEoBIT} alt='oneObit' />
            <h1 className='font-bold text-[.75rem] md:text-2xl'>OneObit</h1>
            </div>
            <div className='text-[.70rem] md:text-xl font-semibold md:mr-10 text-slate-700 mr-3'>
              <p>Web Developer</p>
            </div>
          </div>

          <div className='h-[1.5px] bg-black w-11/12 mx-auto'></div>

          <div className='md:m-10 ml-6 mr-2 mt-2'>
            <ul className="list-disc md:text-lg">
              <li className='mb-2'>Developed and managed the Frontend of an e-commerce platform using React, Redux, and TailwindCSS.</li>
              <li className='mb-2'>Supported the development team in coding, debugging, and testing various components of websites and web applications
                by assisting in the creation of website layouts, writing code in HTML, CSS, JSX, and JavaScript, and troubleshooting issues or
                bugs to ensure smooth functionality across different browsers and devices</li>
              <li className='mb-2' id='experience'>This position has allowed me to apply my knowledge of web technologies, such as HTML, CSS, JavaScript, and various
              frameworks, to real-world projects, enhancing my proficiency in web development.</li>
              <li >Explored ways to visualize and send a daily report of test results to team members using HTML, Javascript, and CSS.</li>
            </ul>
          </div>

          <div className='bg-slate-600 md:flex items-center md:h-12 md:mt-[100px]  mt-16 text-center '>
            <h1 className='md:ml-5 text-xl font-semibold'> MAY 2023 - Current <span className='md:ml-10 font-serif md:inline-block hidden'>Remote</span></h1>
            <p className='md:hidden font-bold text-lg'>Remote</p>
          </div>

          </div>
        </div>

        
    </div>
  )
}

export default Experience;