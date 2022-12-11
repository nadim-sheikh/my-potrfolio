import React from 'react';
import './Skills.css';
import { AiFillHtml5,AiOutlineGithub} from 'react-icons/ai';
import { DiCss3,DiJavascript1 } from 'react-icons/di';
import { FaReact,FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss,SiAdobephotoshop,SiAdobexd, SiNetlify } from 'react-icons/si';
import { CgFigma } from 'react-icons/cg';
import vs from '../../../Images/vscode.png';
const Skills = () => {
    const html = '<html/>';
    const css = '.css{}';
    return (
        <section>
            <h1 className='text-2xl text-center text-white font-bold custom-font mb-10'>Skills</h1>
            <div>
            <div className='lg:flex gap-5'>
            <div className='lg:w-[70%] md:w-[70%] w-[90%] mx-auto lg:mb-0 md:mb-0 mb-5 cursor-pointer rounded-md  custom-bg'>
                <h1 className='text-center custom-font mt-10 text-white text-xl'>Frontend Development</h1>
                <div className='my-10 lg:flex md:flex justify-center gap-10'>
                <div>
                <div className='custom-font text-white mb-10 mx-10 flex items-center gap-5'><AiFillHtml5 className='text-[#57B2F5] text-xl'/>{html}</div>
                <div className='custom-font text-white mb-10 mx-10 flex items-center gap-5'><DiCss3 className='text-[#57B2F5] text-xl'/>{css}</div>
                <div className='custom-font text-white mb-10 mx-10 flex items-center gap-5'><DiJavascript1 className='text-[#57B2F5] text-xl'/>.javascript()</div>
                </div>
               <div>
               <div className='custom-font text-white mb-10 mx-10 flex items-center gap-5'><FaReact className='text-[#57B2F5] text-xl'/>.react.js()</div>
                <div className='custom-font text-white mb-10 mx-10 flex items-center gap-5'><FaBootstrap className='text-[#57B2F5] text-xl'/>.bootstrap()</div>
                <div className='custom-font text-white mb-10 mx-10 flex items-center gap-5'><SiTailwindcss className='text-[#57B2F5] text-xl'/>.tailwindCss()</div>
               </div>
                </div>
            </div>
            <div className='lg:w-[70%] md:w-[70%] w-[90%] mx-auto lg:mb-0 md:mb-10 cursor-pointer rounded-md custom-bg'>
                <h1 className='text-center custom-font mt-10 text-white text-xl'>Using Tools</h1>
                <div className='my-10 lg:flex md:flex justify-center gap-10'>
                <div>
                <div className='custom-font text-white mb-10 mx-10 flex items-center gap-5'><img src={vs} className='text-[#57B2F5] w-5' alt=''/>Vs Code</div>
                <div className='custom-font text-white mb-10 mx-10 flex items-center gap-5'><AiOutlineGithub className='text-[#57B2F5] text-xl'/>Git Hub</div>
                <div className='custom-font text-white mb-10 mx-10 flex items-center gap-5'><CgFigma  className='text-[#57B2F5] text-xl'/>Figma</div>
                </div>
               <div>
               <div className='custom-font text-white mb-10 mx-10 flex items-center gap-5'><SiAdobephotoshop className='text-[#57B2F5] text-xl'/>PhotoShop</div>
                <div className='custom-font text-white mb-10 mx-10 flex items-center gap-5'><SiAdobexd className='text-[#57B2F5] text-xl'/>Adobe XD</div>
                <div className='custom-font text-white mb-10 mx-10 flex items-center gap-5'><SiNetlify className='text-[#57B2F5] text-xl'/>Natlify</div>
               </div>
                </div>
            </div>
            </div>
            </div>
        </section>
    );
};

export default Skills;