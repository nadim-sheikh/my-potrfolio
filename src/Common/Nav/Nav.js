import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/logo.png';
import './Nav.css';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fa';

const Nav = () => {
    const [scroll, setScroll] = useState(false)
    const changeScroll = () => {
        if (window.scrollY >= 50) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }
    window.addEventListener('scroll', changeScroll)
    const [open, setOpen] = useState(false);

    return (
        <nav className={scroll ? 'custom-blur flex items-center justify-between py-5 lg:px-36 px-10 fixed w-full ' : 'flex  items-center justify-between py-5 z-10 lg:px-36 px-10 fixed w-full '}>
            <Link to='/' className="">
                <img className="w-28" src={logo} alt="" />
            </Link>
            <div className="items-center text-white list-none lg:flex md:flex hidden">
                <li className='ml-7'><Link activeClass="active" to="home" spy={true} smooth={true} offset={-50} duration={500} className='cursor-pointer custom-css'>.home()</Link></li>
                <li className='ml-7'><Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className='cursor-pointer custom-css' >.skills()</Link></li>
                <li className='ml-7'><Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer custom-css'>.about()</Link></li>
                <li className='ml-7'><Link activeClass="active" to="project" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer custom-css'>.project()</Link></li>
                <li className='ml-7'><NavLink className='custom-css' to='/blog'>.blog()</NavLink></li>
                <li className='ml-7'><Link activeClass="active" to="contactUs" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer custom-css'>.contactUs()</Link></li>
            </div>
            {
                open ? <AiOutlineClose className='lg:hidden md:hidden block cursor-pointer text-4xl text-[#4859ff]' onClick={() => { setOpen(!open) }} />
                    : <AiOutlineMenu className='lg:hidden md:hidden block cursor-pointer text-4xl text-[#4859ff]' onClick={() => { setOpen(!open) }} />
            }
            <div className={`items-center text-white list-none lg:hidden md:hidden block absolute z-50 ${open ?
                'block left-0 top-20 bottom-0 pt-10 pb-96 text-white custom-blur2 w-[75%] h-full items-center'
                : ' hidden pt-10 pb-96 w-[75%] left-0 top-0 bottom-0 h-full items-center z-50'}`}>
                <li className='ml-7'><Link activeClass="active" to="home" spy={true} smooth={true} offset={-50} duration={500} className='cursor-pointer custom-css'>.home()</Link></li>
                <li className='ml-7'><Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className='cursor-pointer custom-css' >.skills()</Link></li>
                <li className='ml-7'><Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer custom-css'>.about()</Link></li>
                <li className='ml-7'><Link activeClass="active" to="project" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer custom-css'>.project()</Link></li>
                <li className='ml-7'><NavLink className='custom-css' to='/blog'>.blog()</NavLink></li>
                <li className='ml-7'><Link activeClass="active" to="contactUs" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer custom-css'>.contactUs()</Link></li>
            </div>
        </nav>
    );
};

export default Nav;