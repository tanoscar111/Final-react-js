import React, { useEffect } from 'react';
import moment from 'moment';

import history from '../../history'
import './modalBookRoom.css'
import {createBookingRoom } from '../../Redux/Actions/index'
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import {
  Form,
  Input,
  Select,

  DatePicker,



  Row, Col
} from 'antd';
function ModalBookRoom(props) {
  const { isshowModal, handleCloseModal, productId, detailProductListData,createBooking } = props;
  console.log("TCL: ModalBookRoom -> detailProductListData", detailProductListData)
  console.log("TCL: ModalBookRoom -> props", props)
  const { Option } = Select;
  const { TextArea } = Input;

  const authData = JSON.parse(localStorage.getItem("myValueInLocalStorage"));

  const config = {
    rules: [
      {
        type: 'object',
        required: true,
        message: 'Please select time!',
      },
    ],
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }} >
        <Option value="84">+84</Option>

      </Select>
    </Form.Item>
  );
  const onFinish = values => {
    console.log('Received values of form: ', values);
  }
  const handleSubmitBooking = (values) => {
    
    createBooking({
      tenphong:detailProductListData.tenphong,
      id: detailProductListData.id,
      userId: authData.id,
      dateTime: moment().format('DD/MM/YYYY'),
      name: values.name,
      phone: values.phone,
      note: values.note,
    })
   
  }
  return (
    <>

      <Modal show={isshowModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Thông tin đặt phòng
            
          </Modal.Title>

        </Modal.Header>
        <Form
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 14,
          }}
        initialValues={
          {tenphong:detailProductListData.tenphong}
        }
        onFinish={(values) => handleSubmitBooking(values)}
        >

          <Modal.Body>
            <div className="price-room">
              <div className="d-flex justify-content-sm-between price-item">
                <p>Giá thuê phòng</p>     
                 <p>{detailProductListData.giakhuyenmai}</p>
              </div>
              <div className="d-flex justify-content-sm-between price-item">
                <p>Loại phòng</p>
                <p>{detailProductListData.type}</p>
              </div>
              <div className="d-flex justify-content-sm-between price-item">
                <p>Địa chỉ</p>
      <p>{detailProductListData.diachi}</p>
              </div>
            </div>

            <Row gutter={24}>
              <Col span={12}>
                <Form.Item label="tenphong"
                name="tenphong"
                  rules={[

                    {
                      required: true,

                    },
                  ]}
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                >


                  <Input disabled />

                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="dateTime" label="Chọn ngày" {...config}
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}

                >
                  <DatePicker style={
                    { width: "100%" }
                  } />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="name" label="Họ và tên"
                  rules={[

                    {
                      required: true,
                      message: 'Vui lòng nhập họ và tên',
                    }
                  ]}
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                >


                  <Input />

                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="phone"
                  label="Số điện thoại"
                  rules={[{ required: true, message: 'Please input your phone number!' }]}

                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <Input addonBefore={prefixSelector} style={{ width: '100%' }}
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name="note"
                  label="ghi chú"
                  rules={[{ required: true, message: 'Vui lòng nhập ghi chú' }]}

                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}>
                  <TextArea showCount maxLength={100} />
                </Form.Item>
              </Col>
            </Row>



          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
             Thoát
          </Button>
            <Button variant="primary" type="submit"  onClick={handleCloseModal}>
             Đặt phòng
          </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );

}

const mapDispatchToProps = (dispatch) => {
  return {
   
    createBooking: (params) => dispatch(createBookingRoom(params)),
  
  };
}
export default connect(null, mapDispatchToProps)(ModalBookRoom);
