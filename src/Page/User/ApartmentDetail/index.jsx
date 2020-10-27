import React, { useEffect, useState, createElement } from 'react';
import './styles.css'
import Slider from "react-slick";
import { getDetailProductList, createCommentDetailProductlist, getCommentDetailProduct } from '../../../Redux/Actions/index'
import { connect } from 'react-redux';
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";

import { Formik, Field, Form, ErrorMessage } from 'formik';
import ModalBookRoom from '../../../Component/ModalBookRoom';
import * as Yup from 'yup';
import { FcAddressBook } from 'react-icons/fc';


import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
function ApartmentDetail(props) {
  const { detailProductListData, getDetailProductList, match, createCommentDetail, getComment,
    commentList } = props;

  console.log("TCL: ApartmentDetail -> props", props)
  const [commentSubmit, setCommentSubmit] = useState({})


  const [isshowModal, setIsShowModal] = useState(false);

  const handleCloseModal = () => setIsShowModal(false);
  const handleShowModal = () => setIsShowModal(true);
  const authData = JSON.parse(localStorage.getItem("myValueInLocalStorage"));
  const productId = match.params.id;
  useEffect(() => {
    getDetailProductList({
      id: productId
    })
    getComment({
      id: productId
    })
  }, []);


  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];


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

  function renderComment() {
    return commentList.map((commentItem, commentIndex) => {
      if (authData) {
        return (
          <>
            <div>
              <Comment
                actions={actions}
                author={<a>{authData.userName}</a>}
                avatar={
                  <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                  />
                }
                content={
                  <p>
                    {commentItem.comment}
                  </p>
                }
                datetime={
                  <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().fromNow()}</span>
                  </Tooltip>
                }
              />

            </div>
          </>
        )
      }else{
        return null
      }
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
    autoplay: true,
  };


  return (
    <div className="row" >
      <div className="col-md-12">

        <Slider {...settings}>
          {renderImg()}
        </Slider>

      </div>

      <div className="col-md-7 apartmentList">
        <div className="">
          <h3 className="title-name" >
            {detailProductListData.name}
          </h3>
        </div>
        <div className="price-list">

          <div className="detail-price d-flex  align-content-center align-items-center ">
            <FcAddressBook className="mr-4" />
            <p>{detailProductListData.diachi}</p>
          </div>
          <div className="d-flex  align-content-center align-items-center">
            <HiOutlineCurrencyDollar className="mr-4" />
            <p>Giá dịch vụ</p>
          </div>
          <div className="d-flex  align-content-center align-items-center">
            <div className="">
              <div className="list-price mr-4 ">
                <div className="d-flex align-content-center align-items-center ">
                  <HiOutlineCurrencyDollar />
                  <p className="pr-4 text-left">Giá tiền điện:</p>
                  <p className="text-right">{detailProductListData.tiendien}vnđ</p>
                </div>

              </div>
              <div className="list-price mr-4 ">
                <div className="d-flex align-content-center align-items-center ">
                  <HiOutlineCurrencyDollar />
                  <p className="pr-4 text-left">Giá nước:</p>
                  <p className="text-right">{detailProductListData.tiennuoc}vnđ</p>
                </div>


              </div>
            </div>
            <div className=" ">
              <div className="list-price mr-4 ">
                <div className="d-flex align-content-center align-items-center ">
                  <HiOutlineCurrencyDollar />
                  <p className="pr-4 text-left">Giá tiền mạng:</p>
                  <p className="text-right">{detailProductListData.tienmang}vnđ</p>
                </div>

              </div>
              <div className="list-price mr-4 ">
                <div className="d-flex align-content-center align-items-center ">
                  <HiOutlineCurrencyDollar />
                  <p className="pr-4 text-left">Giá nước</p>
                  <p className="text-right">{detailProductListData.tienvesinh}vnđ</p>
                </div>


              </div>
            </div>
          </div>
        </div>
        <div className=" row subtitle-container">
          <div>
            <h4>✺ Mô tả chung</h4>
            <div className="entry-content description__room" >
              <p>Cho thuê phòng trọ - chung cư mini tại Số 45, ngõ 204 Trần Duy Hưng, Cầu Giấy, Hà Nội.</p>
              <p>Tòa nhà mã số <strong>CG013</strong>&nbsp;thiết kế cao 8 tầng. Tầng 1 là khu để xe, từ tầng 1 - 7 được chia thành 17 phòng ngủ khép kín, tầng thượng có khu phơi đồ và máy giặt chung miễn phí cho các
                hộ dân.</p>
              <p><strong>✪ Tổng quan căn phòng</strong></p>
              <p>Các căn phòng thiết kế sang trọng với đầy đủ nội thất, phòng có cửa chính, cửa sổ thoáng mát, ban công phơi đồ
                  rộng rãi.</p>
                ✶ Diện tích căn phòng: Phòng 1 ngủ từ 25 - 35m2.
                ✶ Nội thất cơ bản gồm: Điều hòa, nóng lạnh, giường ngủ, bàn ghế sofa, chậu rửa, tủ bếp, bàn bếp, tủ quần áo, rèm cửa.
                ✶ Chi phí điện nước: Áp dụng tính giá nhà nước (tiêu chuẩn nhà nước)
                ✶ An ninh tòa nhà: Camera theo dõi 24h; Khóa vân tay bảo mật.
                ✶ Tiện ích tòa nhà: Khu để xe miễn phí;
                Mát giặt chung miễn phí; Khu phơi đồ chung miễn phí; Tự do đi lại 24h, không chung chủ.
                ✶ Thủ tục - giấy tờ: Hợp đồng thuê nhà, hợp đồng đặt cọc, thủ tục đăng ký tạm trú tạm vắng,...
                Đội ngũ Bản Đôn sẽ hỗ trợ khách hàng hoàn thành tất cả.
                  <p>Phòng trọ phù hợp dành cho sinh viên, các hộ gia đình, người đi làm.</p>

            </div>

          </div>
          <div className="m-0 comment-customer-item">
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
                  <Form className="">
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


            </div>
            {renderComment()}

          </div>
        </div>
      </div>
      <div className="box-booking col-md-4">
        <p className="price-room-text">{detailProductListData.giakhuyenmai} VNĐ/Tháng</p>
        <div class="btn-detail">
          <span class="noselect" onClick={() => handleShowModal()}>Đặt phòng</span>
        </div>

      </div>


      <ModalBookRoom isshowModal={isshowModal}
        handleCloseModal={handleCloseModal}
        productId={productId}
        detailProductListData={detailProductListData} />
    </div >

  );
}
const mapStateToProps = (state) => {// lấy state từ store của reducers


  const { detailProductListData, commentList } = state.detailproductlist;// lấy array của productsList tring store
  return {
    detailProductListData,
    commentList,
  };

}
const mapDispatchToProps = (dispatch) => {
  return {
    getDetailProductList: (params) => dispatch(getDetailProductList(params)),
    createCommentDetail: (params) => dispatch(createCommentDetailProductlist(params)),
    getComment: (params) => dispatch(getCommentDetailProduct(params))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ApartmentDetail);
