import React from 'react';

import './nav.css'
import history from '../../history'

function NavItem(props) {
    const { name, path, } = props;

    return (

        <>

            <div className="nav-li" onClick={() => history.push(path)}>{name}</div>

            
        </>
    );
}

export default NavItem;
