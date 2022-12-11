import React from 'react';
import './Projects.css';
import { AiOutlineGithub } from 'react-icons/ai';
import { HiOutlineExternalLink } from 'react-icons/hi';
import img1 from '../../../Images/p1.jpg';
import img2 from '../../../Images/p2.jpg';
import img3 from '../../../Images/p3.jpg';
import { Link } from 'react-router-dom';

const Project = () => {
    return (
        <section>
            <h1 className='text-2xl text-center text-white font-bold custom-font mb-10'>Projects</h1>
            <div>
                <div className=''>
                    <div className='lg:flex items-center justify-center gap-5  mx-auto lg:mb-10 md:mb-10 mb-5 rounded-md '>
                        <img className='lg:w-[40%] rounded-md md:w-[90%] w-[90%]' src={img2} alt="" />
                        <div>
                            <h1 className='text-2xl text-[#4859ff] font-bold custom-font'>Resell.com</h1>
                            <div className='p-5 rounded-md  custom-bg2'>
                                <h1 className='text-white custom-font'><span className='text-[#4859ff] font-bold'>Resell.com</span> is a second-hand mobile selling e-commerce website.</h1>
                                <p className='text-white custom-font'> ● Firebase Authentication with Google/Email/Password. <br />
                                    ● Protected Route, Dashboard, Admin Panel, Admin Buyer, and Seller. <br />
                                    ● React.js, Tailwind CSS, MongoDB, Firebase, Node.js, Express.js.</p>
                                <div className='flex justify-end items-center'><a href='https://github.com/nadim-sheikh/Resell.com-Client' target='_blank' className='text-white custom-font flex items-center text-2xl mt-5 mr-5'><AiOutlineGithub />
                                </a><a href='https://resell-com.web.app/' target='_blank' className='text-white custom-font flex items-center text-2xl mt-5'><HiOutlineExternalLink /></a></div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex flex-row-reverse items-center justify-center gap-5  mx-auto lg:mb-10 md:mb-10 mb-5 rounded-md '>
                        <img className='lg:w-[40%] rounded-md md:w-[90%] w-[90%]' src={img1} alt="" />
                        <div>
                            <h1 className='text-2xl text-[#4859ff] font-bold custom-font'>Rifat Kitchen</h1>
                            <div className='p-5 rounded-md  custom-bg2'>
                                <h1 className='text-white custom-font'><span className='text-[#4859ff] font-bold'>Rifat-Kitchen</span> is an online Cloud Kitchen website.</h1>
                                <p className='text-white custom-font'>● Firebase Authentication with Google/Email/Password. <br />
                                    ● Protected Route, Food Category, Dynamic Food Category Route, Add Food, <br /> Add Food review. <br />
                                    ● React.js, Tailwind CSS, MongoDB, Firebase, Node.js, Express.js.
                                </p>
                                <div className='flex justify-start items-center'><a href='https://github.com/nadim-sheikh/Kitchen-Web-Client' target='_blank' className='text-white custom-font flex items-center text-2xl mt-5 mr-5'><AiOutlineGithub />
                                </a><a href='https://rifat-kitchen.web.app/' target='_blank' className='text-white custom-font flex items-center text-2xl mt-5'><HiOutlineExternalLink /></a></div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex items-center justify-center gap-5  mx-auto lg:mb-10 md:mb-10 mb-5 rounded-md '>
                        <img className='lg:w-[40%] rounded-md md:w-[90%] w-[90%]' src={img3} alt="" />
                        <div>
                            <h1 className='text-2xl text-[#4859ff] font-bold custom-font'>CourseBD</h1>
                            <div className='p-5 rounded-md  custom-bg2'>
                                <h1 className='text-white custom-font'><span className='text-[#4859ff] font-bold'>CourseBD</span> is an online learning website.</h1>
                                <p className='text-white custom-font'>● Firebase Authentication with Google/Email/Password. <br />
                                    ● Protected Route, Course Category, Dynamic Course  Category  <br /> Route,  Add Course.  <br />
                                    ● React.js, Tailwind CSS, Firebase, Node.js, Express.js.</p>
                                <div className='flex justify-end items-center'><a href='https://github.com/nadim-sheikh/CourseBD-Client' target='_blank' className='text-white custom-font flex items-center text-2xl mt-5 mr-5'><AiOutlineGithub />
                                </a><a href='https://assignment-4161b.web.app/' target='_blank' className='text-white custom-font flex items-center text-2xl mt-5'><HiOutlineExternalLink /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;