import React, { useState } from 'react';
import './nav.css'
import NavItem from '../NavItem'

import { FaBars } from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import logo from '../../image/logo.jpg'


import history from '../../history'

function Nav(props) {
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  console.log("Nav -> isShowSidebar", isShowSidebar)

  const linkData = [
    {
      name: 'Trang chủ',
      path: '/'
    },
    {
      name: 'Thuê Phòng trọ',
      path: '/About'
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
  const [navBar ,setNavBar]=useState(false)

  const getvalues = localStorage.getItem("myValueInLocalStorage");

  const setValue = JSON.parse(getvalues);
  console.log("TCL: Nav -> setValue", setValue)



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

  const changeBackround= ()=>{
    console.log(window.scrollY);
    if(window.screenY>=80){
      setNavBar(true)
    }else{
      setNavBar(false)
    }
  };
  window.addEventListener('scroll',changeBackround)
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
          <div className='nav-menu'>
            <div className="nav-link-toggle">
              {rederSiderbarNav()
              }
            </div>
            <AiIcons.AiOutlineClose
              className=" color"
              onClick={() => setIsShowSidebar(false)}
            />
          </div>
          <div className='d-flex justify-content-sm-between  align-items-center'>
            <div className={navBar ? 'd-flex justify-content-sm-between align-content-center align-items-center nav  active' : 'd-flex justify-content-sm-between  align-items-center'}>
              <img src={logo} alt="Logo" />
              <div className=" nav-links align-items-center">
                {renderLinkData()
                }
              </div>
            </div>
            <div className="d-flex">
              <div className="nameUser">{setValue.userName}</div>
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

export default Nav;
