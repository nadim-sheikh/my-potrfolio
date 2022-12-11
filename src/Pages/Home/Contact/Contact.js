import React, { useRef } from 'react';
import { MdDriveFileRenameOutline } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { BsGithub, BsWhatsapp, BsLinkedin, BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ym9riel', 'template_7tvwv0n', form.current, 'HZ441MBAvlzy-sCJt')
            .then((result) => {
                console.log(result.text);
                toast.success('Successfully Send')
            }, (error) => {
                console.log(error.text);
            });
    };

    const social = '</Send Message>';
    const emailText = ['</email>'];
    const whatsappText = ['</whatsapp>'];
    return (
        <div className='my-40'>
                    <Toaster/>
            <h1 className='text-center text-white font-bold custom-font text-2xl'>Contact Us</h1>
            <div className='lg:flex md:flex block justify-between gap-10 mt-20'>
                <div className='lg:w-[50%] md:w-[50%] w-full lg:mb-0 md:mb-0 mb-10 custom-bg2 p-5 rounded'>
                    <h1 className='my-5 custom-font text-white text-center'>{social}</h1><hr className='mb-5' />
                    <div>
                        <div className='lg:flex md:flex gap-10 my-20'>
                            <div className='flex'>
                                <HiOutlineMail className='text-5xl text-white' />
                                <div className='ml-5 text-white'>
                                    <p>{emailText}</p>
                                    <p className='leading-3'>nadimsheikh.dev@gmail.com</p>
                                </div>
                            </div>
                            <div className='flex'>
                                <BsWhatsapp className='text-5xl text-white' />
                                <div className='ml-5 text-white'>
                                    <p>{whatsappText}</p>
                                    <p className='leading-3'>+88 01306872498</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center mt-10'>
                            <a href='https://github.com/nadim-sheikh' target='_blank'><BsGithub className='text-2xl mr-5  text-white' /></a>
                            <a href='https://www.linkedin.com/in/nadim-sheikh-86888423b/' target='_blank'><BsLinkedin className='text-2xl mr-5  rounded-full text-white' /></a>
                            <a href='https://twitter.com/Nadim_dev_07' target='_blank'>
                                <AiFillTwitterCircle className='text-3xl  mr-5 text-white' /></a>
                            <a href='https://web.facebook.com/rifat9457657' target='_blank'><BsFacebook className='text-2xl mr-5  text-white' /></a>
                        </div>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className='lg:w-[50%] md:w-[50%] w-full custom-bg2 p-5 rounded'>
                    <div className='mb-5'>
                        <label className='text-white'>Your Name</label>
                        <div className='border pl-2 py-2 rounded-md flex items-center'>
                            <MdDriveFileRenameOutline className='text-white mr-1 text-2xl' />
                            <input type="text" name="user_name" className='text-white custom-font w-full capitalize focus:outline-none bg-transparent' placeholder='Your Name' id="" />
                        </div>
                    </div>
                    <div className='mb-5'>
                        <label className='text-white'>Email</label>
                        <div className='border pl-2 py-2 rounded-md flex items-center'>
                            <HiOutlineMail className='text-white mr-1 text-2xl' />
                            <input type="email" name="user_email" className='text-white custom-font w-full capitalize focus:outline-none bg-transparent' placeholder='Your Email' id="" />
                        </div>
                    </div>
                    <div className='mb-5'>
                        <label className='text-white'>Message</label>
                        <div className='border pl-2 py-2 rounded-md'>
                            <textarea name="message" placeholder='Message' className='h-20 text-white custom-font w-full capitalize focus:outline-none bg-transparent' id="" cols="20" rows="10"></textarea>
                        </div>
                    </div>
                    <input className='bg-[#4859ff] cursor-pointer py-1 px-10 rounded-md text-white ' type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default Contact;