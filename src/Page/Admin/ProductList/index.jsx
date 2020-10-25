import React, { useEffect, useState } from 'react';
import { getProductList } from '../../../Redux/Actions'
import { connect } from 'react-redux';

import './productadmin.css'
import history from "../../../history"
function ProductList(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const { productListData, getListProduct } = props;


    useEffect(() => {
        getListProduct({
            page: currentPage,// khởi đầu page là 1
            limit: 4,
        });


    }, []);

    function handleShowMoreProduct() {
        getListProduct({
          
            page: currentPage + 1,
            // load tiếp page +thêm 1
            limit: 4, //load thêm 4 phần tử
        });
        setCurrentPage(currentPage + 1);// lưu lại
    }

    function renderDataList() {
        return productListData.map((itemList, indexItemList) => {
            return (
                <>

                    <div className="  col-md-3 " key={`itemList${indexItemList}`}
                    >
                        <div class="product-card" onClick={() => history.push(`/admin/apartment/${itemList.id}`)}>
                            <div class="badge">{itemList.type}</div>
                            <div class="product-tumb">
                                <img src={itemList.img} alt="imgList" className="imgcard" />
                            </div>
                            <div class="product-details">
                                <span class="product-catagory">{itemList.name}</span>
                                <h4>Women leather bag</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
                                <div class="product-bottom-details">
                                    <div class="product-price"><small>{itemList.gia}</small>{itemList.giakhuyenmai}</div>

                                </div>
                                <div className="div-button">
                                    <button class="corner-button"
                                        onClick={() => history.push(`/admin/apartment/${itemList.id}`)}
                                    ><span>Chỉnh sửa</span></button>
                                </div>
                            </div>
                        </div>

                    </div>

                </>
            )
        })
    }
    return (
        <>
            <div className="">
                <div className=" row ">
                    {renderDataList()}

                </div>
                <div className="d-flex justify-content-center mt-4">
                    <button class="corner-button"
                        onClick={() => handleShowMoreProduct()}
                    ><span>Xêm thêm</span></button>
                </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
