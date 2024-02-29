import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col justify-between bg-slate-300'>

        <div className='md:h-[15vh] h-12 bg-gray-800 text-slate-400 items-center flex' id='about'>
            <h1 className='m-10 md:text-6xl text-2xl md:font-thin '>ABOUT</h1>
        </div>

        <div className='bg-[#ffffff] md:m-8 m-4 shadow-xl shadow-black'>
            <div className='m-10 md:text-3xl'>
                <p>I am a Computer Science Grad Student at Arizona State University. I enjoy problem-solving and coding. Always strive to bring 100% to the work I do. I have worked on technologies like Python, Django, Flask, MySQL, PostgreSQL, MongoDB, HTML5, CSS, Java, C++ during my bachelor's. I have 19 months of professional work experience which helped me strengthen my experience in Python, Flask, and Django. I am passionate about developing complex applications that solve real-world problems impacting millions of users.</p>
            </div>

            <div className='m-10 md:text-2xl'>
                <p><span className='font-bold md:text-3xl text-xl'>Languages: </span> JavaScript, C, HTML/CSS, SQL </p>
                <p><span className='font-bold md:text-3xl text-xl'>Databases: </span> MySQL Server, MongoDB</p>
                <p><span className='font-bold md:text-3xl text-xl'>Libraries: </span> React.js, Redux </p>
                <p><span className='font-bold md:text-3xl text-xl'>Frameworks: </span> Node.js, TailwindCSS, Bootstrap</p>
                <p><span className='font-bold md:text-3xl text-xl'>Tools & Technologies: </span>Git, JIRA</p>
            </div>

            <div className='m-10 md:text-3xl'>
                <p>Looking for an opportunity to work in a challenging position combining my skills in Software Engineering, which provides professional development, interesting experiences and personal growth.</p>
            </div>
        </div>
    </div>
  )
}

export default About;