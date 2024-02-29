import React, { useState } from 'react';
import Typed from 'typed.js';
import { useEffect } from 'react';
import { useRef } from 'react';
import IMG from '../utils/images/passport_photo.jpg';
import {  useNavigate } from 'react-router-dom';

const Home = () => {

        const el = useRef(null);
        const navigate = useNavigate();

        const[pdfURL, setPdfURL] = useState('');

        const downloadPdf = () => {

          const pdfURL = 'https://drive.google.com/file/d/1cBu4qBUSF-si-e0jUaEFQzGWQLSV93qY/view?usp=sharing';
          setPdfURL(pdfURL);

          const link = document.createElement('a');
          link.href = pdfURL;
          link.setAttribute('download', 'document.pdf');

          document.body.appendChild(link);

          link.click();

          document.body.removeChild(link);
     }

      const contactHandler = () => {
        navigate('/contact');
      }
        
      
        useEffect(() => {
          const typed = new Typed(el.current, {
            strings: ['<i>Web Developer</i>', 'Fast Learner.','Self Motivator'],
            loop: true,
            typeSpeed: 80,
            backSpeed: 40
          });
      
          return () => {
        
            typed.destroy();
          };
        }, []);

  return (
    <div className='flex justify-between bg-[#ffffff] md:h-[85vh] m-4 md:m-8 shadow-xl shadow-black' id='home'>
        <div className='md:m-6 flex flex-col md:justify-evenly md:font-semibold md:h-[500px]' >
            <h1 className='md:text-5xl md:my-10 my-5 mx-2 text-2xl'>Hello , I am <span className='font-bold bg-slate-500 px-2' >Tarun Sharma</span></h1>

            <p className='md:text-3xl md:mb-6 mx-2 text-xl mb-5'> A <span className='font-semibold text-slate-800' ref={el}></span></p>

            <p className='md:mb-10 mx-2 md:text-3xl text-lg mb-8'>Self-driven, quick starter, passionate programmer with a curious mind who enjoys solving a complex and challenging real-world problems.</p>

            <div className='w-4/12 md:ml-0 flex justify-evenly md:text-xl md:mb-0 text-sm mb-16' >
                <button className='md:px-6 md:py-2 px-3 py-2 bg-slate-800 text-slate-300 rounded-md md:ml-0 ml-24 mr-4'
                onClick={downloadPdf}>RESUME</button>
                
                <button onClick={contactHandler}
                 className='md:px-6 md:py-2 px-3 py-2 bg-slate-800 text-slate-300  rounded-md'>CONTACT</button>
            </div>
        </div>

        <div className='hidden m-10 md:flex items-center '>
            <img className='rounded-full  ' src={IMG} alt='tarun' width={700} />
        </div>
    </div>
  )
}

export default Home;