import { Button, Col, Input, Row, Table } from "antd";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { API_LIST_ROOM, API_ROOM_DELETE } from "../../config/endpointapi";
import { bindParam } from "../../config/function";
import { ROOM_CREATE } from "../../config/path";
import PrivateLayout from "../../Layout/PrivateLayout";
import Cookies from "cookies-js";
import "../../style/Room.css";
import { getToken } from "../../Http";

const Room = () => {
  const value = useRef();
  const [status, setStatus] = useState(false);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState();
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const getmovies = async () => {
      const params = { limit, page, keyword };
      axios.defaults.headers.common["Authorization"] = `Bearer ${getToken()}`;
      await axios
        .get(API_LIST_ROOM, { params })
        .then((res) => {
          setData(res?.data?.data?.data);
          setTotal(res?.data?.data?.total);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getmovies();
  }, [status, limit, page, keyword]);
  const onSearch = () => {
    setKeyword(value.current.input.value);
  };

  const onDelete = async (id) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${getToken()}`;
    await axios.post(bindParam(API_ROOM_DELETE, { id })).then((res) => {
      console.log(value?.id);
      setStatus(!status);
    });
  };
  const onChangePage = (page, limit) => {
    setPage(page);
    setLimit(limit);
  };

  //   const onSwitchUpdate = (id) => {
  //     history.push(bindParam(MOVIE_UPDATE, { id }));
  //   };

  const columns = [
    { title: "ID Phòng", dataIndex: "id" },
    { title: "Tên phòng", dataIndex: "name" },
    { title: "Số lượng ghế", dataIndex: "number_seat" },
    {
      title: "Action",
      render: (value, record) => {
        console.log(value);
        return (
          <>
            {/* <Button onClick={() => onSwitchUpdate(value?.id)}>Sửa</Button> */}
            <Button onClick={() => onDelete(value?.id)}>Xóa</Button>
          </>
        );
      },
    },
  ];

  return (
    <PrivateLayout>
      <h2 style={{ fontSize: "32px", textTransform: "uppercase" }}>
        Danh sách phòng
      </h2>
      <Row>
        <Col span={22}>
          <div className="room-search">
            <Input ref={value} placeholder="Search by First name" />
            <div className="room-search__btn" onClick={onSearch}>
              Tìm
            </div>
          </div>
        </Col>
        <Col span={2}>
          <div className="room-add__btn" onClick={onSearch}>
            <Link to={ROOM_CREATE}>Thêm phòng</Link>
          </div>
        </Col>
      </Row>

      <Table
        columns={columns}
        className="room-table"
        pagination={{
          total: total,
          onChange: onChangePage,
          showSizeChanger: true,
          pageSizeOptions: [5, 10, 20, 30],
        }}
        dataSource={data}
      />
    </PrivateLayout>
  );
};
export default Room;
