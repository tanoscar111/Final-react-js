import React, { useEffect } from 'react';
import './productDetail.css'
import Slider from "react-slick";
import { getDetailProductList } from '../../Redux/Actions/index'
import { connect } from 'react-redux';
import { HiOutlineCurrencyDollar } from "react-icons/hi";

function ProductDetail(props) {
  const { detailProductListData, getDetailProductList, match } = props;
  console.log("TCL: ProductDetail -> props", props)

  const productId = match.params.id;
  useEffect(() => {
    getDetailProductList({
      id: productId
    })


  }, [])

  function renderImg() {
    return (detailProductListData.images || []).map((imgDetailItem, imgDetailIndex) => {
      return (
        <>

          <div>
            <img className="imgdetails" src={imgDetailItem} key={`imgDetailItem -${imgDetailIndex}`} />
          </div>

        </>
      )
    })
  }

  const settings = {
    customPaging: function (index) {
      return (
        <div>
          <img className="imgsmall"
            src={detailProductListData.images[index]} />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
  };
  return (
    <div className="row" >
      <div className="col-md-6">

        <Slider {...settings}>
          {renderImg()}
        </Slider>

      </div>
      <div className="col-md-6">
        <div className="right-container">
          <div>
            <div className="d-flex justify-content-sm-start align-content-center align-items-center ">
              <span className="rating">
                <input type="radio" class="rating-input"
                  id="rating-input-1-5" name="rating-input-1" />
                <label htmlForfor="rating-input-1-5" class="rating-star">
                </label>
                <input type="radio" class="rating-input"
                  id="rating-input-1-4" name="rating-input-1" />
                <label htmlForfor="rating-input-1-4" class="rating-star">
                </label>
                <input type="radio" class="rating-input"
                  id="rating-input-1-3" name="rating-input-1" />
                <label htmlForfor="rating-input-1-3" class="rating-star">
                </label>
                <input type="radio" class="rating-input"
                  id="rating-input-1-2" name="rating-input-1" />
                <label htmlForfor="rating-input-1-2" class="rating-star">
                </label>
                <input type="radio" class="rating-input"
                  id="rating-input-1-1" name="rating-input-1" />
                <label htmlForfor="rating-input-1-1" class="rating-star">
                </label>
              </span>
              <p className="text-review">review </p>
            </div>

          </div>
          <div>
            <h3 className="title-name" >
              Phòng trọ Sinh Viên
            </h3>
          </div>
          <div className="d-flex  align-content-center align-items-center">
            <h3 className="price">500,000đ</h3>
            <h3 className="prices">3,000,000</h3>
          </div>
          <div className=" row subtitle-container">
            <div className="col-md-6">
              <div className="d-flex align-content-center align-items-center ">
                <HiOutlineCurrencyDollar />
                <p className="pl-2">Giá tiền điện</p>
              </div>
              <p>3000đ</p>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-content-center align-items-center ">
                <HiOutlineCurrencyDollar />
                <p className="pl-2">Giá tiền nước </p>
              </div>
              <p>3000đ</p>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-content-center align-items-center ">
                <HiOutlineCurrencyDollar />
                <p className="pl-2">Giá tiền mạng</p>
              </div>
              <p>3000đ</p>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-content-center align-items-center ">
                <HiOutlineCurrencyDollar />
                <p className="pl-2">Giá tiền vệ sinh</p>
              </div>
              <p>3000đ</p>
            </div>
          </div>
          <div>

            <h2 className="title">Mô tả phòng:</h2>

            <p className=" information">
              The EOS M50 is a compact interchangeable lens camera for
              aspiring photographers looking for an easy way to boost
              the quality of their photos and videos. With high-resolution
              4K UHD 24p video, you can capture incredible details and
                cinematic moments. </p>
          </div>
          <div class="btn-detail">
            <span class="noselect">Đặt phòng</span>
          </div>

        </div>
      </div>
    </div >

  );
}
const mapStateToProps = (state) => {// lấy state từ store của reducers
  console.log("TCL: mapStateToProps -> state", state);

  const { detailProductListData } = state.detailproductlist;// lấy array của productsList tring store
  return {
    detailProductListData,
  };

}
const mapDispatchToProps = (dispatch) => {
  return {
    getDetailProductList: (params) => dispatch(getDetailProductList(params)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
