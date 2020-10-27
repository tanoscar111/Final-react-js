import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import history from '../../../history';

import { getBookingRoom } from '../../../Redux/Actions'
import './manager.css'

function Manager(props) {
  const { getListBooking, booking } = props;
  console.log("TCL: Manager -> props", props)
  useEffect(() => {
    getListBooking({
      page: 1,// khởi đầu page là 1
      limit: 3,
    })
  }, [])
  function renderBooking() {
    return booking.map((bookingItem, bookingIndex) => {
      return (
        <>
          <tr>
            <td>{bookingItem.id}</td>
            <td>{bookingItem.tenphong}</td>
            <td>{bookingItem.dateTime}</td>
            <td>{bookingItem.name}</td>
            <td>{bookingItem.phone}</td>
            <td>{bookingItem.note}</td>
          </tr>


        </>

      )
    })
  }
  return (
    <>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên phòng</th>
              <th>ngày đặt phòng</th>
              <th>Tên</th>
              <th>Số điện thoại</th>
              <th>Ghi chú</th>
            </tr>
          </thead>
          <tbody>
            {renderBooking()}
          </tbody>
        </Table>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {// lấy state từ store của reducers

  const { booking } = state.bookingRoom;
  return {
    booking
  };

}
const mapDispatchToProps = (dispatch) => {
  return {
    getListBooking: (param) => dispatch(getBookingRoom(param)),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Manager);
