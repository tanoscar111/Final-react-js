import React, { useEffect, useState } from 'react';
import './detailadmin.css'
import Slider from "react-slick";
import { getDetailProductList, createCommentDetailProductlist, getCommentDetailProduct, editDetailProductList } from '../../Redux/Actions/index'
import { connect } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function DetailAdmin(props) {
  const { detailProductListData, getDetailProductList, match, createCommentDetail, getComment,editDetailProduct,detailProductList,
     } = props;
  const productId = match.params.id;
  useEffect(() => {
    getDetailProductList({
      id: productId
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
    <div className="d-flex" >
      <div className="col-md-6">
        <img src={detailProductListData.img} alt="img" className="imgdetail" />

      </div>
      <div className="col-md-6">
        <div className="right-container">
          <div>
            <div className="d-flex justify-content-sm-start align-content-center align-items-center ">

              <Formik
                initialValues={{
                  tenphong: detailProductListData.name,
                  giaphong: detailProductListData.gia,
                  giakhuyenmai: detailProductListData.giakhuyenmai,
                  tiendien: detailProductListData.tiendien,
                  tiennuoc: detailProductListData.tiennuoc,
                  tienmang: detailProductListData.tienmang,
                  tienvesinh: detailProductListData.tienvesinh
                  , noidung: detailProductListData.thongtin
                }}
                validationSchema={Yup.object({
                  tenphong: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Yêu cầu nhập UserName'),
                  giaphong: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Yêu cầu nhập UserName'),
                  giakhuyenmai: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Yêu cầu nhập UserName'),
                  tiendien: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Yêu cầu nhập UserName'),
                  tiennuoc: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Yêu cầu nhập UserName'),
                  tienmang: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Yêu cầu nhập UserName'),
                  tienvesinh: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Yêu cầu nhập UserName'),
                  noidung: Yup.string()
                    .max(150, 'yêu cầu nhập bé hơn 150 kí tự')
                    .required('Yêu cầu nhập  nội dung'),

                })}
                enableReinitialize
                onSubmit={(values) => {
              
                  editDetailProduct({
                  
                    tenphong:values.tenphong,
                    giaphong:values.giaphong,
                    giakhuyenmai:values.giakhuyenmai,
                    tiendien:values.tiendien,
                    tiennuoc:values.tiennuoc,
                    tienmang:values.tienmang,
                    tienvesinh:values.tienvesinh,
                    noidung:values.noidung,
                    id: parseInt(productId),
                  })

                }}
              >
                <Form className="form-group formInformation">
                  <div className="styled-input wide">
                    <label htmlFor="comment">Tên phòng</label>
                    <Field className="form-control" name="tenphong" type="text" />
                    <div>
                      <ErrorMessage name="tenphong" />
                    </div>
                  </div>

                  <div className="styled-input wide">
                    <label htmlFor="comment">Kiểu phòng</label>
                    <Field name="room" as="select" className="form-control">
                      <option value="student">Phòng trọ sinh Viên</option>
                      <option value="home">Phòng chung cư</option>
                      <option value="home">Phòng truyền thống</option>
                    </Field>
                    <div>
                      <ErrorMessage name="room" />
                    </div>
                  </div>
                  <div className="styled-input wide">
                    <label htmlFor="comment">giá phòng</label>
                    <Field className="form-control" name="giaphong" type="number" />
                    <div>
                      <ErrorMessage name="giaphong" />
                    </div>
                  </div>
                  <div className="styled-input wide">
                    <label htmlFor="comment">giá khuyến mãi</label>
                    <Field className="form-control" name="giakhuyenmai" type="number" />
                    <div>
                      <ErrorMessage name="giakhuyenmai" />
                    </div>
                  </div>

                  <div className="d-flex styled-input wide">
                    <div className="col-md-6">
                      <div className="styled-input wide">
                        <label htmlFor="comment">Tiền điện </label>
                        <Field className="form-control" name="tiendien" type="number" />
                        <div>
                          <ErrorMessage name="tiendien" />
                        </div>
                      </div>
                      <div className="styled-input wide">
                        <label htmlFor="comment">Tiền nước </label>
                        <Field className="form-control" name="tiennuoc" type="number" />
                        <div>
                          <ErrorMessage name="tiennuoc" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="styled-input wide">
                        <label htmlFor="comment">Tiền mạng </label>
                        <Field className="form-control" name="tienmang" type="number" />
                        <div>
                          <ErrorMessage name="tienmang" />
                        </div>
                      </div>
                      <div className="styled-input wide">
                        <label htmlFor="comment">Tiền vệ sinh </label>
                        <Field className="form-control" name="tienvesinh" type="number" />
                        <div>
                          <ErrorMessage name="tienvesinh" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="styled-input wide">
                    <label htmlFor="comment">nội dung bài </label>
                    <Field className="form-control" name="noidung" as="textarea" />
                    <div>
                      <ErrorMessage name="noidung" />
                    </div>
                  </div>
                  <div className="submit">

                    <button className="btn" type="submit" >cập nhật</button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>

        </div>

      </div>

    </div >

  );
}
const mapStateToProps = (state) => {// lấy state từ store của reducers
  

  const { detailProductListData  } = state.detailproductlist;// lấy array của productsList tring store
  return {
    detailProductListData,
    
    
  };

}
const mapDispatchToProps = (dispatch) => {
  return {
    getDetailProductList: (params) => dispatch(getDetailProductList(params)),
    createCommentDetail: (params) => dispatch(createCommentDetailProductlist(params)),
    editDetailProduct: (param) => dispatch(editDetailProductList(param))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailAdmin);
