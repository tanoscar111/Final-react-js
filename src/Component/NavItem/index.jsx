import React from 'react';

import './nav.css'
import history from '../../history'

function NavItem(props) {
    const { name, path, } = props;

    return (

        <>

            <p className="nav-li" onClick={() => history.push(path)}>{name}</p>

            
        </>
    );
}

export default NavItem;
