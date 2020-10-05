import React from 'react';


import './homepage.css'
import Nav from '../../Component/Nav'
import Slider from "react-slick";
import Phong1 from '../../image/Phong1.jpg'
import Phong2 from '../../image/Phong2.jpg'
import Phong3 from '../../image/Phong3.jpg'
import Phong4 from '../../image/Phong4.jpg'


import {
    Route,
} from "react-router-dom";


function HomePage({ component: Component, ...props }) {
    const dataImgage = [
        { img: Phong1 },
        { img: Phong2 },
        { img: Phong3 },
        { img: Phong4 },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    function renderimage() {
        return dataImgage.map((itemImage, indexImage) => {
            return (
                <> <div >
                    <img key={`imgage ${indexImage}`} src={itemImage.img} alt="slide"  className="imgSlider"/>
                </div>
                </>

            )
        })
    }
    return (
        <Route
            {...props}
            render={(routerProps) => (
                <>
                    <Nav />
                    <div className="slider">
                        <Slider {...settings}>

                            {renderimage()}


                        </Slider>
                    </div>
                </>
            )}
        />




    );
}

export default HomePage;
