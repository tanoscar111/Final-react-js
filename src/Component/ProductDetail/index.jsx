import React, { useEffect, useState } from 'react';
import './productDetail.css'
import Slider from "react-slick";
import { getDetailProductList ,createCommentDetailProductlist,getCommentDetailProduct} from '../../Redux/Actions/index'
import { connect } from 'react-redux';
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";

import { Formik, Field, Form, ErrorMessage } from 'formik';
import ModalBookRoom from './../ModalBookRoom'
import * as Yup from 'yup';
function ProductDetail(props) {
  const { detailProductListData, getDetailProductList, match,createCommentDetail ,getComment,
    commentList} = props;
    console.log("TCL: ProductDetail -> props", props)
  const [commentSubmit, setCommentSubmit] = useState({})


  const [isshowModal, setIsShowModal] = useState(false);

  const handleCloseModal = () => setIsShowModal(false);
  const handleShowModal = () => setIsShowModal(true);
  const productId = match.params.id;
  useEffect(() => {
    getDetailProductList({
      id: productId
    })
    getComment({
      id:productId
    })
  }, []);

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

  function renderComment(){
    return commentList.map((commentItem,commentIndex)=>{
      return(
        <>
        <div>
          {commentItem.comment}
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

            </div>
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
        <div>
          <div>
            <Rating
              emptySymbol={<AiOutlineStar />}
              fullSymbol={<AiFillStar />}
            />
            <div>
              <Formik
                initialValues={{ comment: '', }}
                validationSchema={Yup.object({
                  comment: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Yêu cầu nhập UserName'),

                })}
                onSubmit={(values) => {
                 
                  setCommentSubmit(values)
                  createCommentDetail({
                    comment: values.comment,
                    userName: JSON.parse(localStorage.getItem('myValueInLocalStorage')).userName,
                    productId: parseInt(productId),
                  })

                }}
              >
                <Form className="form-group">
                  <label htmlFor="comment">đánh giá</label>
                  <Field className="form-control" name="comment" as="textarea" />

                  <div className="submit">

                    <button className="btn" type="submit" >đánh giá</button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
          <div>
            {renderComment()}
          </div>
          <div class="btn-detail">
            <span class="noselect" onClick={()=>handleShowModal()}>Đặt phòng</span>
          </div>

        </div>
      </div>
      <ModalBookRoom isshowModal={isshowModal}
      handleCloseModal={handleCloseModal}
      productId={productId}
      detailProductListData={detailProductListData}/>
    </div >

  );
}
const mapStateToProps = (state) => {// lấy state từ store của reducers
  

  const { detailProductListData ,commentList} = state.detailproductlist;// lấy array của productsList tring store
  return {
    detailProductListData,
    commentList,
  };

}
const mapDispatchToProps = (dispatch) => {
  return {
    getDetailProductList: (params) => dispatch(getDetailProductList(params)),
    createCommentDetail: (params) => dispatch(createCommentDetailProductlist(params)),
    getComment:(params)=>dispatch(getCommentDetailProduct(params))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
