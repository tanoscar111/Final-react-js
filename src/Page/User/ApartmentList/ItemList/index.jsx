import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';

import { getProductList } from '../../../../Redux/Actions';
import { connect } from 'react-redux';
import history from "../../../../history"

import './styles.css';

function ItemList(props) {
  const {
    productListData,
    getListProduct,
    currentPage,
    setCurrentPage,
    apartmentType,
  } = props;

  useEffect(() => {
    getListProduct({
      page: currentPage,// khởi đầu page là 1
      type: apartmentType,
      limit: 6,
      more: false,
    });
  }, []);

  function handleShowMoreProduct() {
    getListProduct({

      page: currentPage + 1,
      type: apartmentType,
      // load tiếp page +thêm 1
      limit: 6, //load thêm 4 phần tử
      more: true,
    });
    setCurrentPage(currentPage + 1);// lưu lại
  }

  function renderApartmentCard() {
    return productListData.map((apartmentItem, apartmentItemIndex) => {
      return (
        <Col span={8} key={`apartment-item-${apartmentItemIndex}`}>
          <div
            class="apartment-card-container"
            onClick={() => history.push(`/apartment/${apartmentItem.id}`)}
          >
            <div class="badge">{apartmentItem.type}</div>
            <div class="product-tumb">
              <img src={apartmentItem.img} alt="imgList" className="imgcard" />
            </div>
            <div class="product-details">
              <span class="product-catagory">{apartmentItem.name}</span>
              <h4>Women leather bag</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
              <div class="product-bottom-details">
                <div class="product-price"><small>{apartmentItem.gia}</small>{apartmentItem.giakhuyenmai}</div>

              </div>
              <div className="div-button">
                <button class="corner-button"
                  onClick={() => history.push(`/apartment/${apartmentItem.id}`)}
                ><span>Chi tiết</span></button>
              </div>
            </div>
          </div>
        </Col>
      )
    })
  }
  return (
    <>
      <Row gutter={16}>
        {renderApartmentCard()}
      </Row>
      <div className="d-flex justify-content-center mt-4">
        <button class="corner-button"
          onClick={() => handleShowMoreProduct()}
        ><span>Xêm thêm</span></button>
      </div>
    </>

  );
}

const mapStateToProps = (state) => {// lấy state từ store của reducers

  const { productListData } = state.productreducer;// lấy array của productsList tring store
  return {
    productListData,
  };

}
const mapDispatchToProps = (dispatch) => {
  return {
    getListProduct: (params) => dispatch(getProductList(params)),
  };
}// lấy action từ store
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
