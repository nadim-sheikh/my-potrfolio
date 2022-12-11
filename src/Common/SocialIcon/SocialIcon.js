import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { HiCursorClick } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const SocialIcon = () => {
    const download = '</download resume>'
    return (
        <div className='flex items-center'>
            <a a href='https://github.com/nadim-sheikh' target='_blank'><AiFillGithub className='text-white text-xl hover:text-[#4859ff] mt-2 ml-5'/></a>
            <a href='https://www.linkedin.com/in/nadim-sheikh-86888423b/' target='_blank'><BsLinkedin className='text-white  hover:text-[#4859ff] mt-2 ml-5 '/></a>
            <a href='mailto:nadimsheikh.dev@gmail.com' target='_blank'><MdEmail className='text-white text-xl hover:text-[#4859ff] mt-2 ml-5'/></a>
            <a target='_blank' href="https://drive.google.com/file/d/1QFUhNIm053qjBdDqKn5BUPm7-nv3sTPw/view?usp=share_link" className='text-[#6574ff] underline hover:text-white mt-2 ml-5 custom-font flex items-center'>{download} <HiCursorClick/></a>
        </div>
    );
};

export default SocialIcon;