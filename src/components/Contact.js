import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {  useNavigate } from 'react-router-dom';
import { BiSolidExit } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import Footer from './Footer';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const navigate = useNavigate();

  const backToHome = () => {
    navigate('/');
  }

  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_8m9oztp",
        "template_ern16xc",
        e.target,
        "aUEuIIc0WnbkXST6P"
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );
    
    // Clears the form after sending the email
    e.target.reset();
  };
  return (
    <div className='bg-slate-400 md:h-full'>

    <div className='flex justify-between bg-gray-800 text-slate-400 md:h-[15vh] h-24 md:shadow-lg shadow-black sticky top-0'>

      <div className='flex items-center md:ml-10 ml-4'>
        <h1 className='md:font-bold font-semibold text-lg md:text-[2.1rem] '>Tarun Sharma / <span className='font-semibold text-sm md:text-[1.3rem]'>Software Developer</span></h1>
      </div>
      <div className='flex items-center md:mr-10  md:text-xl'>
        <BiSolidExit onClick={backToHome} className='md:hidden m-6 text-2xl'/>
        <button onClick={backToHome}
        className='md:flex items-center hidden md:text-2xl gap-2'><BiSolidExit className='md:text-3xl'/> HOME</button>
      </div>
      
    </div>

    <div className='bg-[#ffffff] md:m-10 m-4 shadow-xl shadow-black'>
            <div className='md:ml-20 m-4 md:mt-10 md:mb-10 '>
                <h1 className='md:text-6xl text-2xl font-bold md:mb-12 text-center'>GET IN TOUCH</h1>
            </div>

            <div className='h-[1px] bg-black w-11/12 mx-auto'></div>

            <div className='md:flex md:justify-between md:w-11/12 '>
              <div className='md:w-4/12 md:ml-16 ml-5 '>
                  <h1 className='mt-5 md:text-3xl text-xl font-semibold'>DON'T BE SHY !</h1>
                  <p className='md:mt-6 mt-3 md:mr-0 mr-2 md:mb-10 mb-4 text-lg '>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>

                  <div className='flex items-center gap-4 mb-6'>
                    <div className=' md:text-[2.5rem] text-4xl'><IoMdMail /></div>
                    <div className=''>
                      <h1 className='font-semibold text-[1rem]'>MAIL ME</h1>
                      <p className=''>tarun.sharma11774@gmail.com</p>
                    </div>
                  </div>

                  <div className='flex items-center gap-4'>
                  <IoCall className='md:text-[2.4rem] text-4xl' />
                  <div>
                    <h1 className='font-semibold text-[1rem]'>CALL ME</h1>
                    <p>+91 7906626139</p>
                  </div>
                  </div>
              </div>

              <div className='h-[.50px] md:hidden sm:hidden bg-black w-11/12 mx-auto mt-4'></div>
              
              <div className='md:w-6/12 m-6 mt-6 md:mt-5 md:mb-16'>
                    <form className=''
                      onSubmit={sendEmail}>

                        <div className='flex justify-between'>
                          <input className='border-2 border-black pl-5 p-[5px]  rounded-lg md:w-[320px] w-36 ' type="text" placeholder='Your Name' name="user_name" />
                          <input className='border-2 border-black pl-5 p-[5px] rounded-lg md:w-[320px] w-36' type="email" placeholder='Your Email' name="user_email" />
                        </div>
              
                      <textarea className='border-2 border-black mt-6 w-full md:h-[220px] h-24 pl-4 p-[5px] rounded-lg  text-black' name="message" placeholder='Your Message . . .'  />

                      <input className='text-center w-full h-10 mx-auto border-2 rounded-md mt-5 font-semibold text-xl border-black cursor-pointer hover:bg-black hover:text-white mb-5' type="submit" value="Send" disabled={isSubmitting} />
                      {stateMessage && <p>{stateMessage}</p>}
                    </form>
              </div>
            </div>
        </div>
        <Footer/>
    </div>
    
  );
}

export default Contact;