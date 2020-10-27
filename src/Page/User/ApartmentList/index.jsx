import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Select } from 'antd';
import ItemList from './ItemList'
import history from '../../../history'

import { getProductList, searchapartments } from '../../../Redux/Actions/index'

import './styles.css';

const FILTER_APARTMENTS = [
  { title: "Tất cả", value: null },
  { title: "phòng Sinh Viên", value: 'psv' },
  { title: "phòng khu chung cư", value: 'pcc' },
  { title: "phòng trọ truyền thống", value: 'ptt' },
];

function ApartmentList({ getProductList, productListData, searchApartmentsList, search }) {
  console.log("TCL: ApartmentList -> search", search)
  const [currentPage, setCurrentPage] = useState(1);
  const [apartmentType, setApartmentType] = useState(null);

  const { Option } = Select;
  const options = search.map(item => <Option key={item.id}>{item.name}</Option>);
  function handleSelectApartmenttype(type) {
    setApartmentType(type);
    getProductList({
      page: currentPage,// khởi đầu page là 1
      type: apartmentType,
      limit: 6,
      more: false,
    })
  }

  function renderFilterItem() {
    return FILTER_APARTMENTS.map((filterItem, filterItemIndex) => {
      return (
        <>
          <div key={`filter-item-${filterItemIndex}`} onClick={() => handleSelectApartmenttype(filterItem.value)} className="fitter-item ">
            {filterItem.title}
            
          </div>

        </>
      )
    })
  }

  function handleSearch(values) {
    searchApartmentsList({
      values: values
    })
  }
  return (
    <div className="apartment-list-container">
      <div className="filter-container">

        <div className="fitter-List">
          {renderFilterItem()}
          <div className="animation start-fitter"></div>
          
        </div>
        <div>
          <Select
            showSearch

            placeholder

            defaultActiveFirstOption={false}
            showArrow={false}
            filterOption={false}
            placeholder="Search"
            onSearch={(values) => handleSearch(values)}
            onChange={(id) => history.push(`/apartment/${id}`)}
            notFoundContent={null}
          >
            {options}
          </Select>
        </div>
      </div>
      <div className="apartment-list-content">
        <ItemList currentPage={currentPage} setCurrentPage={setCurrentPage} apartmentType={apartmentType} />
      </div>
    </div>
  );

}
const mapStateToProps = (state) => {// lấy state từ store của reducers

  const { search } = state.serchApartments;
  const { productListData } = state.productreducer;// lấy array của productsList tring store
  return {
    productListData,
    search
  };

}
const mapDispatchToProps = (dispatch) => {
  return {
    getProductList: (params) => dispatch(getProductList(params)),
    searchApartmentsList: (params) => dispatch(searchapartments(params))
  };
}// lấy action từ store
export default connect(mapStateToProps, mapDispatchToProps)(ApartmentList);
