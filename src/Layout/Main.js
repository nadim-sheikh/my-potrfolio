import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Common/Footer/Footer';
import Nav from '../Common/Nav/Nav';
import './Main.css';

const Main = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;