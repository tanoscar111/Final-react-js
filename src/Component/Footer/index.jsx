import React, { useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './footer.css'
import { AiFillFacebook } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';

function Footer(props) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-5 left">
            <p className="des">
              Sáng tạo, tinh tế và phù hợp sẽ khiến
              sản phẩm của bạn trở nên khác biệt.
                </p>
            <p className="address">
              H01/06 K130 Onog ích đường
                </p>
            <p className="phone">(+84) 98 9596 913</p>
            <div className="social">
              <AiFillFacebook className="icon-phone mr-4" />
              <FiInstagram className="icon-phone"/>
            </div>
          </div>
          <div className="col-md-7 map-address">
            <div className="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239.69015613683402!2d108.19869566290217!3d16.011303050251907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421a2431e7eae1%3A0xecbbd22bc219c61f!2zMTMwIMOUbmcgw41jaCDEkMaw4budbmcsIEtodcOqIFRydW5nLCBD4bqpbSBM4buHLCDEkMOgIE7hurVuZyA1NTAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1603451833802!5m2!1svi!2s"

                allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>

          </div>
        </div>

      </div>
      <p className="back-to-top">
        <div class="line"></div>
            CUỘN LÊN
        </p>
    </footer>
  )
}

export default (Footer);
