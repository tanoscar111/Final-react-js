import React, { useState } from 'react';
import './nav.css'
import NavItem from '../NavItem'

import { FaBars } from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import logo from '../../image/logo.jpg'
import {
  Route,
  Redirect,
} from "react-router-dom";
import { Dropdown } from 'react-bootstrap';
import history from '../../history'
import { logoutUser} from '../../Redux/Actions'
import { connect } from 'react-redux';

function Nav(props) {
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  

  const linkData = [
    {
      name: 'Trang chủ',
      path: '/'
    },
    {
      name: 'Thuê Phòng trọ',
      path: '/apartments'
    },
    {
      name: 'Chủ nhà',
      path: '/chunha'
    },
    {
      name: 'đăng nhập',
      path: '/login',
    }
  ]
  const [navBar, setNavBar] = useState(false)

  const authData = JSON.parse(localStorage.getItem("myValueInLocalStorage"));
  const {logoutUser}=props;
  function renderLinkData() {
    return linkData.map((itemLink, indexLink) => {
      return (
        <NavItem key={`itemlink ${indexLink}`} name={itemLink.name} path={itemLink.path}
          sidebar={isShowSidebar}
        />
      )
    });
  }

  function renderSidebarItem() {
    return linkData.map((sidebarItem, sidebarItemIndex) => {
      return (
        <div
          key={`sidebar-${sidebarItemIndex}`}
          className="sidebar-item"
          onClick={() => history.push(sidebarItem.path)}
        >
          {sidebarItem.name}
        </div>
      )
    });
  }

  const changeBackround = () => {
    
    if (window.screenY >= 80) {
      setNavBar(true)
    } else {
      setNavBar(false)
    }
  };
  window.addEventListener('scroll', changeBackround)
  function rederSiderbarNav() {
    return linkData.map((sidebarNav, sidebarNavIndex) => {
      return (
        <div
          key={`sidebarNav-${sidebarNavIndex}`}
          className=""
        >
          {sidebarNav.name}
        </div>
      )
    });
  }
  // function RegisterLoginSubmitForm(values){
  //     setDataFormRegister({
  //       values:values
  //     })
  // }
  function logoutUsers() {
    localStorage.removeItem("myValueInLocalStorage");
    return (
      <Redirect to="/" />
    )
  }
  return (
    <>
      <div className={isShowSidebar ? 'sidebar-container active' : 'sidebar-container'}>
        <div className="sidebar-menu">
          {rederSiderbarNav()}
        </div>
        <AiIcons.AiOutlineClose
          className="color close-sidebar-icon"
          onClick={() => setIsShowSidebar(false)}
        />
      </div>
      <div className="Home">
        <div className="navs" >
            <div className="nav-link-toggle">
              {rederSiderbarNav()
              }
            </div>
            <AiIcons.AiOutlineClose
              className=" color"
              onClick={() => setIsShowSidebar(false)}
            />
         
          <div className='d-flex justify-content-sm-between  align-items-center'>
            <div className={navBar ? 'd-flex justify-content-sm-between align-content-center align-items-center nav  active' : 'd-flex justify-content-sm-between  align-items-center'}>
              <img src={logo} alt="Logo" />
              <div className=" nav-links align-items-center">
                {renderLinkData()
                }
              </div>
            </div>
            <div className="d-flex ">

              <Dropdown>
                {authData && <Dropdown.Toggle className="nameUser">
                  {authData.userName}
                </Dropdown.Toggle>}

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => logoutUsers()} >đăng xuất</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="hamberger-icon">

                <FaBars className='humberger' onClick={() => setIsShowSidebar(true)} />
              </div>
            </div>

          </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
