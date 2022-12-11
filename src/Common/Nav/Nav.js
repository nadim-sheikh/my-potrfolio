import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/logo.png';
import './Nav.css';

const Nav = () => {
    const [scroll, setScroll] = useState(false)
    const changeScroll = ()=>{
        if(window.scrollY>=50){
            setScroll(true)
        }else{
            setScroll(false)
        }
    }
    window.addEventListener('scroll', changeScroll)
    return (
             <nav className={scroll? 'custom-blur md:flex lg:flex hidden items-center justify-between py-5 lg:px-36 px-10 fixed w-full ' : 'md:flex lg:flex hidden items-center justify-between py-5 z-10 lg:px-36 px-10 fixed w-full '}>
                <Link to='/' className="">
                    <img className="w-28" src={logo} alt=""/>
                </Link>
                <div className="flex items-center text-white list-none">
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