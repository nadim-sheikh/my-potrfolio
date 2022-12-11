import React from 'react';
import './About.css';
import Me from '../../../Images/me.jpg';

const About = () => {
    return (
        <div className=''>
            <h1 className='mb-20 text-white text-center text-2xl font-bold custom-font'>About Me</h1>
            <div className='lg:flex block items-center'>
                <img className='w-[50%] mx-auto rounded-md border-2 border-[#4859ff] lg:p-5 p-1 lg:rounded-md lg:w-[400px] lg:h-[575px] lg:mb-0 mb-5' src={Me} alt="" />
            <div className='lg:ml-28 '>
                <h1 className='text-white text-5xl font-bold'>Nadim <span className='text-[#4859ff]'>Sheikh</span></h1>
                <p className='text-white custom-font custom-hight my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores mollitia tempora <br /> maiores excepturi sint cupiditate unde necessitatibus? Laboriosam dolores adipisci <br /> quia, molestias amet enim. Ad nam quis culpa perferendis libero laborum esse <br /> necessitatibus error tempore incidunt eius qui omnis sed veritatis aspernatur, magnam <br /> quo, consequuntur laudantium minima, rerum impedit? Tenetur?</p>
                <a target='_blank' href="https://drive.google.com/file/d/1QFUhNIm053qjBdDqKn5BUPm7-nv3sTPw/view?usp=share_link"><button className='bg-[#4859ff] py-1 px-3 rounded text-white hover:bg-[#3947ca] '>Download Resume</button></a>
            </div>
            </div>
        </div>
    );
};

export default About;