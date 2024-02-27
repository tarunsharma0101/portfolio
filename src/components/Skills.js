import React from 'react';
import HTML from '../utils/images/html5.png';
import CSS from '../utils/images/css3.png';
import JAVASCRIPT from '../utils/images/javascript.png';
import MYSQL from '../utils/images/mysql.jpg'

const Skills = () => {
  return (
    <div className='bg-slate-300 md:mt-10 md:h-[192vh] h-[135vh]'>

        <div className='md:h-[15vh] h-12 bg-gray-800 text-slate-400 items-center flex'>
            <h1 className='m-10 md:text-6xl text-2xl md:font-thin ' id='skills'>Skills</h1>
        </div>

        <div className=' bg-[#ffffff] shadow-xl shadow-black md:ml-8 ml-4 mr-4 md:mr-8 my-8 flex flex-col'>
            <h1 className='md:ml-14 ml-3 my-5 md:text-3xl text-xl font-semibold' >Languages and Database</h1>

            <div className='h-[1px] bg-black w-11/12 mx-auto'></div>

            <div className='flex justify-evenly my-5 md:text-2xl text-[10px] '>
                <div className='text-center  font-semibold'>
                    <img className='md:h-32 mb-2 h-10' src={JAVASCRIPT} alt='Javascript' />
                    <p>Javascript</p>
                </div>
                <div className='text-center font-semibold'>
                    <img className='md:h-32 h-10 mb-2' src={HTML} alt='Html' />
                    <p>HTML</p>
                </div>
                <div className='text-center font-semibold'>
                    <img className='md:h-32 h-10 mb-2' src={CSS} alt='Css' />
                    <p>CSS</p>
                </div>
                <div className='text-center font-semibold'>
                    <img className='md:h-32 h-10 mb-2' src='https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png' alt='C' />
                    <p>C</p>
                </div>
                <div className='text-center  font-semibold'>
                    <img className='md:h-32 mb-2 h-10' src={MYSQL} alt='MySql' />
                    <p>MySQL</p>
                </div>
                <div className='text-center font-semibold'>
                    <img className='md:h-32 mb-2 h-10' src='https://www.opc-router.de/wp-content/uploads/2021/03/mongodb_thumbnail.png' alt='MongoDB' />
                    <p>MongoDB</p>
                </div>
                
            </div>

        </div>
        <div className='bg-[#ffffff] shadow-xl shadow-black md:ml-8 ml-4 mr-4 md:mr-8 my-8 flex flex-col'>
            <h1 className='md:ml-14 ml-3 my-5 md:text-3xl text-xl font-semibold'>Libraries</h1>

            <div className='h-[1px] bg-black w-11/12 mx-auto'></div>

            <div className='flex justify-evenly my-5 md:text-2xl text-[16px] '>
                <div className='text-center font-semibold'>
                    <img className='md:h-32 mb-2 h-16' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG4s3jmI8ktFyEoq-2Biupdj0llqnTzABHu5FNn33gbg&s" alt='React' />
                    <p>React</p>
                </div>
                <div className='text-center font-semibold'>
                    <img className='md:h-32 mb-2 h-16' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMprFlNXlCNw5hoPX9TMfJ6lJelSDscTz9GLHVWQPNQQ&s" alt='Redux' />
                    <p>Redux</p>
                </div>
                
                
            </div>

        </div>
        <div className='bg-[#ffffff] shadow-xl shadow-black md:ml-8 ml-4 mr-4 md:mr-8 my-8 flex flex-col'>
            <h1 className='md:ml-14 ml-3 my-5 md:text-3xl text-xl font-semibold'>Frameworks</h1>

            <div className='h-[1px] bg-black w-11/12 mx-auto'></div>

            <div className='flex justify-evenly my-5 md:text-2xl text-[15px] '>
                <div className='text-center font-semibold'>
                    <img className='md:h-32 mb-2 h-14' src="https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png" alt='Nodejs' />
                    <p>NodeJs</p>
                </div>
                <div className='text-center font-semibold'>
                    <img className='md:h-32 mb-2 h-14' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST6naOfuSoM3aXEOM03FsAHymHcqm4y6kfzRg8iuXH5A&s" alt='TailwindCSS' />
                    <p>TailwindCSS</p>
                </div>
                <div className='text-center font-semibold'>
                    <img className='md:h-32 mb-2 h-14' src="https://miro.medium.com/v2/resize:fit:400/1*onZhQJU7A3ab6V1sHfMRkQ.jpeg" alt='Bootstrap' />
                    <p>Bootstrap</p>
                </div>
                
                
            </div>

        </div>
        <div className='bg-[#ffffff] shadow-xl shadow-black md:ml-8 ml-4 mr-4 md:mr-8 my-8 flex flex-col'>
            <h1 className='md:ml-14 ml-3 my-5 md:text-3xl text-xl font-semibold'>Others</h1>

            <div className='h-[1px] bg-black w-11/12 mx-auto'></div>

            <div className='flex justify-evenly my-5 md:text-2xl text-[18px] '>
                <div className='text-center font-semibold'>
                    <img className='md:h-32 mb-2 h-16' src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt='Git' />
                    <p>Git</p>
                </div>
                <div className='text-center font-semibold'>
                    <img className='md:h-32 mb-2 h-16' src="https://cdn.icon-icons.com/icons2/2699/PNG/512/atlassian_jira_logo_icon_170511.png" alt='jira' />
                    <p>Jira</p>
                </div>
                
                
            </div>

        </div>

    </div>
  )
}

export default Skills;