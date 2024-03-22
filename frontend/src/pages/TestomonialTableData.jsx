import { Image, Table, message } from "antd";
import testo_svc from "./TestomonialService";
import service_svc from "./service.Service";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchTestoData,
  createTestoAsync,
  deleteTestoById,
} from "../slice/testomonial";
import { current } from "@reduxjs/toolkit";

const TestomonialTableData = () => {
  const { testomonialData, response, btn_loading } = useSelector(
    (state) => state.testomonial
  );
  console.log("testomonialdata", testomonialData);
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage({
    duration: 1,
  });

  useEffect(() => {
    if (testomonialData.length === 0) {
      dispatch(fetchTestoData());
    }
    response && messageApi.success(response);
  }, []);

  const testomonialColumns = [
    {
      title: "Client Name",
      dataIndex: "clientname",
      key: "clientname",
      render: (_, { clientname }) => <p>{clientname}</p>,
    },
    {
      title: "Client Image",
      dataIndex: "clientimage",
      key: "image",
      render: (_, { clientimage }) => (
        <Image
          width={50}
          height={50}
          className="rounded-full"
          src={process.env.REACT_APP_API_URL + clientimage}
        />
      ),
    },
    {
      title: "Client Review",
      dataIndex: "clientreview",
      key: "clientreview",
      render: (_, { clientreview }) => (
        <p>{service_svc.trimmer(clientreview)}</p>
      ),
    },

    {
      title: "action",
      key: "action",
      fixed: "right",
      width: 120,
      render: (_, _obj) => (
        <MdDelete
          className="cursor-pointer hover:scale-125"
          size={24}
          color="red"
          onClick={() => {
            handleDelete(_obj._id);
          }}
        />
      ),
    },
  ];
  const handleDelete = async (id) => {
    try {
      let res = await testo_svc.deleteTestomonialById(id);
      if (res) {
        message.success(res.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {contextHolder}
      <Table
        size="medium"
        dataSource={testomonialData}
        style={{
          height: 475,
        }}
        loading={btn_loading}
        bordered
        scroll={{ y: 350 }}
        columns={testomonialColumns}
        className="shadow table-container ant-table-width font-thin "
        pagination={false}
      />
    </>
  );
};

export default TestomonialTableData;
