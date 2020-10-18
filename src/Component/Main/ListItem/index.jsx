import React, { useEffect } from 'react';
import { getProductList } from '../../../Redux/Actions/index'
import { connect } from 'react-redux';
import './lisitem.css'

function ListItem(props) {
    const { productListData, getListProduct } = props;
    console.log(props)
    useEffect(() => {
        getListProduct({
            page: 1,
            limit: 10,
        }
        )
    }, [])
    function renderDataList() {
        return productListData.map((itemList, indexItemList) => {
            return (
                <>

                    <div className="  col-md-3 " key={`itemList${indexItemList}`}>
                        <div class="product-card">
                            <div class="badge">Hot</div>
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
                            </div>
                        </div>

                    </div>

                </>
            )
        })
    }
    return (
        <>
            <div className="   ">
                <div className=" row ">
                    {renderDataList()}

                </div>
            </div>
        </>

    );
}

const mapStateToProps = (state) => {// lấy state từ store của reducers
    console.log("TCL: mapStateToProps -> state", state);
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
export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
