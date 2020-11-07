import React, { useState, useEffect } from 'react';

import './login.css'
import Loginform from '../Login/Loginfom'
import Register from '../Login/Register'
import { Button } from 'react-bootstrap';
import { getListUser, createUser, checkuser } from '../../Redux/Actions'
import { connect } from 'react-redux';

function Login(props) {
    const [showLogin, setShowLogin] = useState('')
    const { getListUser, createUser, usertListData, checkuser } = props

    useEffect(() => {
        getListUser();
    }, [])
    
    function toggleLogin(type) {
       
        setShowLogin(type)
       

    }
    function submitLogin(values) {
        checkuser({
            userName:values.userName,
            passWord: values.passWord,
            role: 'user',
        })
    }

    function submitRegister(values) {
        createUser({
            userName: values.userName,
            passWord: values.passWord,
            role: 'user',

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
const mapStateToProps = (state) => {// lấy state từ store của reducers
   
    const { usertListData } = state;// lấy array của productsList tring store
    return {
        usertListData,
    };

}
const mapDispatchToProps = (dispatch) => {
    return {
        getListUser: (param) => dispatch(getListUser(param)),
        createUser: (param) => dispatch(createUser(param)),
        checkuser: (param) => dispatch(checkuser(param))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
