import React,{useEffect} from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './loginform.css'
import { Button } from 'react-bootstrap';

function Register(props) {
  const{submitRegister}=props
    return (
        <div>
            <Formik
                initialValues={{ userName: '', passWord: '', repassWord: '' }}
                validationSchema={Yup.object({
                    userName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Yêu cầu nhập UserName'),
                    passWord: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Yêu cầu nhập mật khẩu'),
                    repassWord: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Yêu cầu nhập mật khẩu')
                        .oneOf([Yup.ref("passWord")], "Mật khẩu không đúng")

                })}
                onSubmit={(values) => {

                    console.log(values)
                    submitRegister(values)
                }}
            >
                <Form className="form-group">
                    <label htmlFor="userName">Nhập tài khoản</label>
                    <Field className="form-control" name="userName" type="text" />
                    <div className="text-danger">
                        <ErrorMessage name="userName" />
                    </div>
                    <label htmlFor="firstName">Mật khẩu</label>
                    <Field className="form-control" name="passWord" type="password" />
                    <div className="text-danger">
                        <ErrorMessage name="passWord" />
                    </div>
                    <label htmlFor="firstName">Yêu Cầu nhập lại mật khẩu</label>
                    <Field className="form-control" name="repassWord" type="password" />
                    <div className="text-danger">
                        <ErrorMessage name="repassWord" />
                    </div>
                    <div className="submit">
                        <Button className="btn-submit" type="submit"> Đăng Kí</Button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default(Register);
