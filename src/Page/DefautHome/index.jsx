import React,{useState} from 'react';


import './homepage.css'
import Nav from '../../Component/Nav'
import Home from "../../Component/Home"
import Slider from "react-slick";
import Phong1 from '../../image/Phong1.jpg'
import Phong2 from '../../image/Phong2.jpg'
import Phong3 from '../../image/Phong3.jpg'
import Phong4 from '../../image/Phong4.jpg'

import Main from '../../Component/Main'
import {
    Route,
} from "react-router-dom";
import Footer from '../../Component/Footer';


function HomePage({ component: Component, ...props }) {
  

    return (
        <Route
            {...props}
            render={(routerProps) => (
                <>
                    <Nav  />
                    <Home/>
                    <Footer/>
                   
                </>
            )}
        />




    );
}

export default HomePage;
