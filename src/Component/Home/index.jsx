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
  var settingscomment = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,

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
      <div className="container-fluid  mt-4">
        <h3 className="text-center  name-sesion">Chúng tôi là ai</h3>
        <div className="text-center">
          <span class="border-icon">
            <span class="title-icon"></span>
          </span>
        </div>
        <div className="container information-text">
          <p>Với quy mô hệ thống  tự tin là đơn vị vận hành đầu tiên tốt nhất áp
          dụng công nghệ 4.0 vào quản
          lý chung cư mini nhà trọ. Là thương hiệu hàng đầu, chúng tôi có đội
          ngũ chuyên gia giàu kinh nghiệm,
          luôn giữ trách nghiệm cùng sự nhiệt huyết trong công việc.

          Chúng tôi luôn sẵn sàng phục vụ nhu cầu <b>tìm nhà trọ, tìm phòng trọ,
             chung cư mini, căn hộ mini</b> cho mọi khách hàng, với mong muốn "Xây
             dựng những căn phòng ĐẸP - Tạo dựng môi trường sống TỐT -
             Đảm bảo sự MINH BẠCH" cũng như QUYỀN LỢI cho người thuê phòng và
             cả cộng đồng.</p>
        </div>
      </div>
      <div className="container-fluid">
        <h3 className="text-center  name-sesion mt-4">Có gì ở chúng tôi</h3>
        <div className="text-center">
          <span class="border-icon">
            <span class="title-icon"></span>
          </span>
        </div>
        <div className="container d-flex ">
          <div className="col-md-4  icon-information">
            <div>
              <img src="https://img.icons8.com/plasticine/100/000000/home-page.png" />
              <h4>Căn hộ</h4>
              <p>Vệ sinh sạch sẽ, không gian thoáng mát, đầy đủ nội thất lắp đặt mới. </p>
            </div>
            <div className="mt-4">
              <img src="https://img.icons8.com/ios/50/000000/password--v1.png" />
              <h4>Bảo mật</h4>
              <p>Hệ thống an ninh đảm bảo an toàn từ "camera giám sát" đến "bảo mật vân tay". </p>
            </div>
          </div>
          <div className="col-md-4  icon-information">
            <div>            <img src="https://img.icons8.com/doodle/48/000000/electrical--v1.png" />
              <h4>Giá điện</h4>
              <p>Người thuê phòng sẽ được "trả tiền điện" theo đúng "khung giá nhà nước".</p>
            </div>
            <div className="mt-4">
              <img src="https://img.icons8.com/ios/50/000000/maneki.png" />
              <h4>Văn hóa</h4>
              <p>Nếp sống văn hóa lành mạnh, thân thiện , gần gũi trong khu nhà trọ.</p>
            </div>
          </div>
          <div className="col-md-4  icon-information">
            <div>
              <img src="https://img.icons8.com/dusk/64/000000/water.png" />
              <h4>Giá nước</h4>
              <p>Người thuê phòng không phải lo "thiếu nước sạch" hay "giá tiền nước cao".</p>
            </div>
            <div className="mt-4">
              <img src="https://img.icons8.com/ios/50/000000/online-support.png" />
              <h4>Hỗ trợ</h4>
              <p>Đội ngũ vận hành hỗ trợ 24h, xử lý mọi vấn đề cho người thuê phòng.</p>
            </div>
          </div>

        </div>
      </div>



      <div className="container imgroom">
        <div className="card">
          <img src="https://file4.batdongsan.com.vn/2019/08/01/20190801164853-c3b1_wm.jpg" />
          <div class="card__head">phòng trọ gác lửng</div>
        </div>
        <div className="card">
          <img src="https://xaynhatro.net/wp-content/uploads/2020/06/mau-thiet-ke-phong-tro-co-gac-lung-dep-hien-dai-o-huong-nam-1.png" />
          <div className="card__head">Phòng trọ sinh Viên</div>
        </div>
        <div className="card">
          <img src="https://cdn.pose.com.vn/assets/2018/05/Chung-c%C6%B0-mini-18m2-%C4%91%E1%BA%B9p-t%E1%BB%ABng-centimet-2-1.jpg" />
          <div className="card__head">Chung cư mini</div>
        </div>
        <div className="card">
          <img src="https://znews-photo.zadn.vn/w660/Uploaded/ovhunut/2019_11_03/d64acf92d47e32206b6f.jpg" />
          <div className="card__head">Phòng trọ truyền thống</div>
        </div>
        <div className="card">
          <img src="https://znews-photo.zadn.vn/w660/Uploaded/ovhunut/2019_11_03/d64acf92d47e32206b6f.jpg" />
          <div className="card__head">Phòng trọ truyền thống</div>
        </div>
      </div>
      <div className="container">
        <h3 className="text-center name-sesion">Ý kiến khách hàng</h3>
        <div className="text-center">
          <span class="border-icon">
            <span class="title-icon"></span>
          </span>
        </div>
        <Slider {...settingscomment} className="comment">
          <div>
            <p className="sign">''</p>
            <p className="comment-customer">
              Phòng trọ rất sạch sẽ thoáng mát, có sẵn điều hòa, nóng lạnh, giường tủ còn mới. Ở đây giờ giấc thoải mái hợp với mình vì hay đi làm về muộn,
              mình khá ưng ý khi thuê được căn phòng này.
            </p>
          </div>

          <div>
            <p className="sign">''</p>
            <p className="comment-customer">
              Phòng trọ ở đây tốt đấy, từ khi chuyển sang đây chưa thấy có vấn đề gì xảy ra, an ninh tốt, điện nước ổn định. Bên này hợp đồng thuê nhà rõ ràng, được các anh làm đầy đủ cho tạm trú tạm vắng cũng thấy chuẩn chỉnh.

              Phòng trọ rất sạch sẽ thoáng mát, có sẵn điều hòa, nóng lạnh, giường tủ còn mới. Ở đây giờ giấc thoải mái hợp với mình vì hay đi làm về muộn, mình khá ưng ý khi thuê được căn phòng này.

              Xưa mình ở phòng cũ trả tiền điện cao tới 4 nghìn/ số, mùa hè dùng điều hòa, tủ lạnh là mỗi tháng đóng thêm 300-500 nghìn tiền điện. Giờ ở phòng của Bản Đôn, tiền điện đóng theo quy định nhà nước nên tiết kiệm được khá nhiều và cũng cảm thấy thoải
              mái hơn vì mình dùng trả đúng giá nhà nước.
            </p>
          </div>
          <div>
            <p className="sign">''</p>
            <p className="comment-customer">
              Phòng trọ ở đây tốt đấy, từ khi chuyển sang đây chưa thấy có vấn đề gì xảy ra, an ninh tốt, điện nước ổn định. Bên này hợp đồng thuê nhà rõ ràng, được các anh làm đầy đủ cho tạm trú tạm vắng cũng thấy chuẩn chỉnh.

              Phòng trọ rất sạch sẽ thoáng mát, có sẵn điều hòa, nóng lạnh, giường tủ còn mới. Ở đây giờ giấc thoải mái hợp với mình vì hay đi làm về muộn, mình khá ưng ý khi thuê được căn phòng này.

              Xưa mình ở phòng cũ trả tiền điện cao tới 4 nghìn/ số, mùa hè dùng điều hòa, tủ lạnh là mỗi tháng đóng thêm 300-500 nghìn tiền điện, tiền điện đóng theo quy định nhà nước nên tiết kiệm được khá nhiều và cũng cảm thấy thoải mái hơn vì mình dùng trả đúng giá nhà nước.

              Tôi ở đây được 7 tháng, phòng trọ ở đây rất oke, điện nước giá dân, chỗ để xe ở tầng 1 có cửa và camera giám sát an toàn, thấy an ninh tốt - đảm bảo khi ra vào cửa bằng vân tay.
            </p>
          </div>
          <div>
            <p className="sign">''</p>
            <p className="comment-customer">
              Tôi là kế toán mức lương cũng vừa đủ sống, đi tìm nhiều phòng thì chọn được phòng hiện giờ , rất thích. Tôi thấy mọi thứ đều đầy đủ, có camera an ninh, có thiết bị PCCC mà nhiều nhà trọ khác không có, chẳng biết thế nào nhưng mình ở vẫn có cảm giác an tâm hơn.
            </p>
          </div>
          <div>
            <p className="sign">''</p>
            <p className="comment-customer">
              Phòng trọ rất sạch sẽ thoáng mát, có sẵn điều hòa, nóng lạnh, giường tủ còn mới. Ở đây giờ giấc thoải mái hợp với mình vì hay đi làm về muộn,
              mình khá ưng ý khi thuê được căn phòng này.
            </p>
          </div>
          <div>
            <p className="sign">''</p>
            <p className="comment-customer">
              Phòng trọ rất sạch sẽ thoáng mát, có sẵn điều hòa, nóng lạnh, giường tủ còn mới. Ở đây giờ giấc thoải mái hợp với mình vì hay đi làm về muộn,
              mình khá ưng ý khi thuê được căn phòng này.
            </p>
          </div>
        </Slider>
      </div>
      <section class="section-action">
        <div class="container">
          <h3> Bạn đã sẳn sàng đến với chúng tôi chưa</h3>
          <button class="btn-text main round bg-white btn-open-popup" >Đăng ký</button>
        </div>
      </section>

    </>





  );
}

export default Home;
