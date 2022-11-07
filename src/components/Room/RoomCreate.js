import { Button, Form, Input } from "antd";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { API_ROOM_STORE } from "../../config/endpointapi";
import { ROOM } from "../../config/path";
import PrivateLayout from "../../Layout/PrivateLayout";
import Cookies from "cookies-js";
import { getToken } from "../../Http";

const RoomCreate = () => {
  const history = useHistory();

  const onChange = (e) => {
    console.log(e.target.value);
  };
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  const onFinish = (values) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${getToken()}`;
    axios
      .post(API_ROOM_STORE, values)
      .then(function (res) {
        history.push(ROOM);
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  return (
    <PrivateLayout>
      <Form name="validate_other" {...formItemLayout} onFinish={onFinish}>
        <h2 style={{ fontSize: "2rem", textTransform: "uppercase" }}>
          Thêm phòng
        </h2>
        <Form.Item
          {...formItemLayout}
          name="name"
          label="Tên phòng"
          rules={[
            {
              required: true,
              message: "Điền tên phòng",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name="number_seat"
          label="Số lượng ghế"
          rules={[
            {
              required: true,
              message: "Nhập số lượng ghế",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Xác nhận
          </Button>
        </Form.Item>
      </Form>
    </PrivateLayout>
  );
};
export default RoomCreate;
