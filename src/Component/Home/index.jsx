import React, { useState } from 'react';


import './home.css'
import Nav from '../../Component/Nav'
import Slider from "react-slick";
import Phong1 from '../../image/Phong1.jpg'
import Phong2 from '../../image/Phong2.jpg'
import Phong3 from '../../image/Phong3.jpg'
import Phong4 from '../../image/Phong4.jpg'


import {
  Route,
} from "react-router-dom";


function Home(props) {
  const [dataformRegister, setDataFormRegister] = useState({})
  console.log("TCL: Nav -> dataformRegister", dataformRegister)
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
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
  };
  function registerLoginSubmitForm(values) {
    setDataFormRegister({
      values: values
    })
  }
  function renderimage() {
    return dataImgage.map((itemImage, indexImage) => {
      return (
        <> <div >
          <img key={`imgage ${indexImage}`} src={itemImage.img} alt="slide" className="imgSlider" />
        </div>
        </>

      )
    })
  }
  return (
    <>
      
      <div className="slider">
        <Slider {...settings}>

          {renderimage()}


        </Slider >
      </div>
      <div className="container-fluid">
        <h3 className="text-center">Chúng tôi là ái</h3>
        <div className="col "></div>
      </div>
    </>





  );
}

export default Home;
