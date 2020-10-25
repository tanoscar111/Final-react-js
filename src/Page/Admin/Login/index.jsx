import React, { useState, useEffect } from 'react';

import './login.css'
import Loginform from '../Login/Loginfom'
import Register from '../Login/Register'
import { Button } from 'react-bootstrap';
import { getListUser, createUser, loginAdmin } from '../../../Redux/Actions'
import { connect } from 'react-redux';

function Login(props) {
    const [showLogin, setShowLogin] = useState('')
    const { usertListData, loginAdmin } = props
    
    function toggleLogin(type) {
     
        setShowLogin(type)
       

    }
    function submitLogin(values) {
       
        loginAdmin({
            userName:values.userName,
            passWord: values.passWord,
        })
    }

    function submitRegister(values) {
        createUser({
            userName: values.userName,
            passWord: values.passWord,

        })
    }
    function renderItem() {
        if (showLogin === "register") {
            return (
                <Register submitRegister={submitRegister} />

            )

        } else {
            return (
                <Loginform  submitLogin={submitLogin}/>
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

const mapDispatchToProps = (dispatch) => {
    return {
        loginAdmin: (param) => dispatch(loginAdmin(param))

    }
}
export default connect(null, mapDispatchToProps)(Login);
