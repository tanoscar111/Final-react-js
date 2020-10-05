import React, { useState } from 'react';

import './login.css'
import Loginform from '../Login/Loginfom'
import Register from '../Login/Register'
import { Button } from 'react-bootstrap';


function Login() {
    const [showLogin, setShowLogin] = useState('')
    
    console.log (showLogin)

    function toggleLogin(type) {
        console.log(type)
        setShowLogin(type)
    }
    // function submitForm(type, values) {
    //     console.log(type)
    // }

    function renderItem() {
        if (showLogin === "register") {
                return (
                   <Register/>
                    
                )
           
        } else {
            return (
                <Loginform />
            )

        }
    }


    return (
        <div className="Login">
            <div className="form-box">
                <div className="buttonform">
                    <div id="btn">
                        <Button className="toggle-btn" onClick={() => toggleLogin("login")}> Đăng nhập</Button>


                        <Button className="toggle-btn" onClick={() => toggleLogin("register")}> Đăng kí</Button>

                    </div>
                </div>
                {renderItem()}


            </div>
        </div>
    );
}

export default Login;
