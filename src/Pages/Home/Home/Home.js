import React from 'react';
import { BsFillMouseFill,BsArrowDown } from 'react-icons/bs';
import Typewriter from 'typewriter-effect';
import About from '../About/About';
import Skills from '../Skills/Skills';
import SocialIcon from '../../../Common/SocialIcon/SocialIcon';
import './Home.css';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <>
            <section id='home' className='flex flex-col justify-center items-center lg:h-[80vh] md:h-[80vh] h-[70vh]'>
                <p className='custom-font text-white'>.hello()</p>
                <h1 className='text-5xl text-white lg:flex'>I am<span className='ml-1 custom-font'><Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('<Span style="color: rgb(72, 89, 255);">Nadim Sheikh</Span>')
                            .start();
                    }}
                /></span></h1>
                <p className='text-white custom-font'><Typewriter
                    options={{
                        strings: ['react.js() developer', 'front end developer', 'mern stack developer', 'graphic designer'],
                        autoStart: true,
                        loop: true,
                    }}
                /></p>
                <SocialIcon/>
            </section>
            <section className='lg:mb-40 mb-96 md:mb-[200px] -z-50 custom-animation'>
                <p className='custom-font text-white flex justify-center items-center'>scroll down<BsArrowDown className='text-white'/></p>
                <BsFillMouseFill className='mx-auto h-5 w-5 text-white text-xl'/>
            </section>
            <section id='skills' className='lg:mx-[400px] mx-5 lg:mb-[150px] mb-[20px]'>
                <Skills />
            </section>
            <section id='about' className='lg:mx-[300px] mx-5 my-5 lg:my-36'>
                <About />
            </section>
            <section id='project' className='lg:mx-[300px] mx-5 my-5 lg:my-36'>
                <Project/>
            </section>
            <section id='contactUs' className='lg:mx-[300px] mx-5 my-5 lg:my-36'>
                <Contact/>
            </section>
        </>
    );
};

export default Home;