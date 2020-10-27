import React, { useState, useEffect } from 'react';
import './host.css'
import { Breadcrumb } from 'antd';
import history from '../../../history'
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import Phong1 from '../../../image/Phong1.jpg'
function HostPage() {
  console.log("TCL: history", history)

  return (
    <div className="host d-flex">
      <div>
        <div>
          <Breadcrumb>

            <Breadcrumb.Item onClick={() => history.push({ pathname: '/' })}>
              <HomeOutlined />
              <span>Trang chủ</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="host-item">Chủ nhà</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div>
          <article class="post fadeTop">
            <header>
              <div class="title">
                <h2><p>Bí khíp thuê phòng</p></h2>
              </div>
            </header>
            <img class="image " src={Phong1} alt=""/>
            <div class="description-post">
              <p>Mấy năm gần đây, những ngày cuối năm người ta thường nói đến việc gộp Tết ta và Tết tây thành một.</p>
              <p>Việt Nam là một nước nhiệt đới và ảnh hưởng nhiều của văn hóa phương Đông. Khác với các nước phương Tây, Tết của nước ta thường bắt đầu vào mùa xuân, sắc màu của "cánh mai vàng cành đào hồng thắm tươi", hay các loại hoa khắp mọi miền làm nên một bức tranh đẹp rạng ngời mà các nước khác khó mà có được.</p>
              <p>Cho dù cách tổ chức ngày dương lịch đầu năm của Việt Nam vẫn đang ngày càng rực rỡ thì tâm hồn của tôi vẫn hướng về tết âm. Có lẽ là một phần ký ức từ những ngày thơ bé, khi đường phố vắng hoe, không khí lành lạnh có chút mưa phùn và cảm giác như thể tất cả mọi người đều đang lo âu xen lẫn rộn rã cho một dịp thực sự quan trọng trong năm. Một phần là từ chính những điều hàng ngày của ba mẹ. Ba dọn nhà và chỉ đạo mọi người phối hợp thong thả từ trước Tết đến cả tháng. Còn mẹ, dường như với vài chục năm kinh nghiệm của một bà nội trợ, đã có đủ danh sách những thứ cần mua, cần nấu, cần chuẩn bị cho cả một tuần dài của tết.</p>
            </div>
          </article>
        </div>
      </div>
      <div>
        <section id="openCV">

          <section id="intro"><span class="logo" target="_blank">
           </span>
            <header>
              <h2>Thanh Tân</h2>
            </header>
          </section>
          <section class="blurb">
            <p>Xin chào!</p>
            <p>Tôi là Tân, một 9x đến từ Đà Nẵng.<br />Hiện tại tôi đang là<span class="note u-ml-5 u-mr-5"> Chủ nhà </span> tại Đà Nẵng.</p>
            <p>Với sở thích khám phá và có thói quen theo dõi sự phát triển của công nghệ. Blog này tạo ra với những bài viết trải nghiệm cuộc sống, kinh nghiệm, xu hướng nghề nghiệp... từ bản thân và những bài viết sưu tầm. Quan trọng hơn tạo được sự chia sẻ và gắn kết với nhiều người xung quanh.</p>
          </section>
        </section>
      </div>
    </div>

  );
}

export default HostPage;
