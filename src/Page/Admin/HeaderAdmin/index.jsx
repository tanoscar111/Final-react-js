import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Space, Button } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

import logo from '../../../image/logo.jpg'
import { Redirect } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';
import history from '../../../history';

import { logoutUser } from '../../../Redux/Actions'
import './headerAdmin.css'

function HeaderAdmin(props) {
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  const NAV_ITEMS = [
    ,
    {
      name: 'Thuê Phòng trọ',
      path: '/admin/apartments'
    },
    {
      name: 'Quản lí  phòng',
      path: '/admin/manager'
    },
  ]

  const authData = JSON.parse(localStorage.getItem("myValueInLocalStorage"));

  const { logoutUser } = props;

  function renderNavPath() {
    return NAV_ITEMS.map((pathItem, pathItemIndex) => {
      return (
        <div
          key={`nav-path-${pathItemIndex}`}
          className="nav-path-item"
          onClick={() => history.push(pathItem.path)}
        >
          {pathItem.name}
        </div>
      )
    });
  }

  function renderSidebarPath() {
    return NAV_ITEMS.map((sidebarItem, sidebarItemIndex) => {
      return (
        <div
          key={`sidebar-item-${sidebarItemIndex}`}
          className="sidebar-item"
          onClick={() => history.push(sidebarItem.path)}
        >
          {sidebarItem.name}
        </div>
      )
    });
  }

  function logoutUsers() {
    localStorage.removeItem("myValueInLocalStorage");
    return (
      history.push({pathname:'/login'})
    )
  }
  return (
    <>
      <div className={isShowSidebar ? 'sidebar-container active' : 'sidebar-container'}>
        <div className="sidebar-menu">
          {renderSidebarPath()}
        </div>
        <Button
          className="close-sidebar-icon"
          type="text"
          icon={<CloseOutlined style={{ color: 'white', fontSize: 24 }} />}
          onClick={() => setIsShowSidebar(false)}
        />
      </div>
      <div className="nav-container">
        <Space>
          <img src={logo} alt="Logo" height="72px" width="auto" />
          <div className="nav-path-container">
            {renderNavPath()}
          </div>
        </Space>
        <div className="d-flex">
          <Dropdown>
            {authData && <Dropdown.Toggle className="nameUser">
              {authData.userName}
            </Dropdown.Toggle>}
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => logoutUsers()} >đăng xuất</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button
            type="text"
            icon={<MenuOutlined style={{ fontSize: 24 }} />}
            onClick={() => setIsShowSidebar(true)}
          />
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {// lấy state từ store của reducers

  const { usertListData } = state;// lấy array của productsList tring store
  return {
    usertListData,
  };

}
const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: (param) => dispatch(logoutUser(param)),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderAdmin);
