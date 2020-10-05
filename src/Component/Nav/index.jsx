import React, { useState } from 'react';
import './nav.css'
import NavItem from '../NavItem'

import { FaBars } from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import logo from '../../image/logo.jpg'

import history from '../../history'
function Nav() {
  const [sidebar, setSidebar] = useState('');

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

  const showSidebar = (type) => setSidebar(type);

  function renderLinkData() {
    return linkData.map((itemLink, indexLink) => {
      return (
        <NavItem key={`itemlink ${indexLink}`} name={itemLink.name} path={itemLink.path}
          sidebar={sidebar} />
      )
    })


  }

  return (
    <>

      <div className="Home">
        <div className="navs">
          <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <div className="nav-link-toggle">
              {renderLinkData()
              }
            </div>
            <AiIcons.AiOutlineClose className=" color"
              onClick={() => showSidebar(false)} />
          </div>
          <div className='d-flex justify-content-between align-content-center align-items-center nav '>
            <img src={logo} alt="Logo" />
            <div className=" nav-links align-items-center">
              {renderLinkData()
              }
              <button className="btn1 btn " onClick={() => history.push('/login')}>Login</button>
            </div>
            <FaBars className='humberger' onClick={() => showSidebar('active')} />

          </div>
        </div>
      </div>


    </>
  );
}

export default Nav;
