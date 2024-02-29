import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { IoMdHome } from "react-icons/io";
import { IoInformationCircle } from "react-icons/io5";
import { MdSchool } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  const homeHandler = () => {
    navigate('/');
  }

  return (
    <div className='flex justify-between bg-gray-800 text-slate-400 md:h-[15vh] h-24 md:shadow-lg shadow-black sticky top-0'>
      <div className='flex items-center md:ml-10 ml-4'>
        <h1 className='md:font-bold font-semibold text-xl md:text-[2.1rem]'>Tarun Sharma / <span className='font-semibold text-sm md:text-[1.3rem]'>Software Developer</span></h1>
      </div>
      <div className='flex items-center md:mr-6'>
        <button className='md:hidden font-semibold text-2xl mr-6'><IoMdMenu/></button>
        <ul className='hidden md:flex md:gap-5 md:font-semibold md:text-[1.4rem] '>
         <AnchorLink href="#home"><li onClick={homeHandler} className='flex items-center gap-1'><IoMdHome/>Home</li></AnchorLink>
         <AnchorLink href="#about"><li className='flex items-center gap-1'><IoInformationCircle/>About</li></AnchorLink>
         <AnchorLink href="#experience"><li className='flex items-center gap-1'><SiCodeforces />Experience</li></AnchorLink>
         <AnchorLink href="#home"><li className='flex items-center gap-1'><FaLaptopCode />Projects</li></AnchorLink>
         <AnchorLink href="#skills"><li className='flex items-center gap-1'><FaCode/>Skills</li></AnchorLink>
         <AnchorLink href="#education"><li className='flex items-center gap-1'><MdSchool/>Education</li></AnchorLink>
        </ul>
      </div>
    </div>
  )
}

export default Header;