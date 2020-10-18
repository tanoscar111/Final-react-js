import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './loginform.css'
import { Button } from 'react-bootstrap';
function Loginform(props) {
    const {submitLogin}=props
    return (
        <div>
            <Formik
                initialValues={{ userName: '', passWord: '' }}
                validationSchema={Yup.object({
                    userName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Yêu cầu nhập UserName'),
                    passWord: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Yêu cầu nhập mật khẩu'),

                })}
                onSubmit={(values) => {
                    console.log(values)
                    submitLogin(values)
                }}
            >
                <Form className="form-group">
                    <label htmlFor="userName">Tài khoản</label>
                    <Field className="form-control" name="userName" type="text" />
                    <div className="text-danger">
                        <ErrorMessage name="userName" />
                    </div>
                    <label htmlFor="firstName">Mật khẩu</label>
                    <Field className="form-control" name="passWord" type="password" />
                    <div className="text-danger">
                        <ErrorMessage name="passWord" />
                    </div>
                    <div className="submit">
                        
                        <Button className="btn-submit" type="submit" > Đăng nhập</Button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default Loginform;
