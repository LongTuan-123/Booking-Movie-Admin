import { Button, Col, Input, Row, Table } from "antd";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { API_SEAT, API_SEAT_DELETE } from "../../config/endpointapi";
import { bindParam } from "../../config/function";
import { SEAT_CREATE } from "../../config/path";
import PrivateLayout from "../../Layout/PrivateLayout";
import Cookies from "cookies-js";
import "../../style/Movie.css";
import { getToken } from "../../Http";

const Seat = () => {
  const value = useRef();
  const [token] = useState(Cookies?.get("token"));
  const [status, setStatus] = useState(false);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState();
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const history = useHistory();

  const onSearch = () => {
    setKeyword(value.current.input.value);
  };

  useEffect(() => {
    const getseats = async () => {
      axios.defaults.headers.common["Authorization"] = `Bearer ${getToken()}`;
      const params = { limit, page, keyword };
      await axios
        .get(API_SEAT, { params })
        .then((res) => {
          setData(res?.data?.data?.data);
          setTotal(res?.data?.data?.total);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getseats();
  }, [status, limit, page, keyword]);

  const onDelete = async (id) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${getToken()}`;
    await axios.post(bindParam(API_SEAT_DELETE, { id })).then((res) => {
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
    { title: "ID Seat", dataIndex: "id" },
    { title: "Hàng", dataIndex: "row" },
    { title: "Số thứ tự", dataIndex: "order" },
    { title: "Loại ghế", dataIndex: "type_seat" },
    { title: "Phòng chiếu", dataIndex: ["room", "name"] },
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
        Danh sách phim
      </h2>
      <Row>
        <Col span={22}>
          <div className="movies-search">
            <Input ref={value} placeholder="Search by First name" />
            <div className="movies-search__btn" onClick={onSearch}>
              Tìm
            </div>
          </div>
        </Col>
        <Col span={2}>
          <div className="movies-add__btn" onClick={onSearch}>
            <Link to={SEAT_CREATE}>Thêm ghế</Link>
          </div>
        </Col>
      </Row>

      <Table
        columns={columns}
        className="movie-table"
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

export default Seat;
