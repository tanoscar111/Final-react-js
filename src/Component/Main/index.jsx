import React, { useEffect } from 'react';

import './main.css'
import history from '../../history'
import Nav from '../Nav';

import ListItem from './ListItem'
import Siderbar from './Siderbar';
import { makeStyles } from '@material-ui/core/styles';
import { getProductList } from '../../Redux/Actions/index'
import { connect } from 'react-redux';
const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const listSiderBar = [
  { listName: "phòng Sinh Viên " },
  { listName: "phòng khu chung cư " },
  { listName: "phòng trọ truyền thống " },


];

function Main(props) {
  const { productListData, getList } = props;
  

  function renderListSiderBar() {
    return listSiderBar.map((itemSiderBar, indexSiderBar) => {
      return (
        <Siderbar key={`siderbar ${indexSiderBar}`} listName={itemSiderBar.listName}
        />
      )
    })
  }


  return (
    <>

      <div className="main container-fluid">
        <div className="row">
          <div className=" siderbarsum">

            <div className="listSiderbar">
              <div className="listName">
                <h3>Danh sách phòng</h3>
                {renderListSiderBar()}

              </div>
              <div>
                <label>
                  <input type="text" required  placeholder="Search"/>l
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-9 list">

            <div className="">
              <ListItem productListData={productListData} />
            </div>
          </div>
        </div>
      </div>

    </>
  );

}
const mapStateToProps = (state) => {// lấy state từ store của reducers
  
  const { productListData } = state;// lấy array của productsList tring store
  return {
    productListData,
  };

}
const mapDispatchToProps = (dispatch) => {
  return {
    getList: (params) => dispatch(getProductList(params)),
  };
}// lấy action từ store
export default connect(mapStateToProps, mapDispatchToProps)(Main);
