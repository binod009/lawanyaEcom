import { Image, Table, message } from "antd";
import React, { useEffect, useState } from "react";
import testo_svc from "./TestomonialService";
import service_svc from "./service.Service";
import { MdDelete } from "react-icons/md";

const TestomonialTableData = () => {
  const [testomonialData, setTestomonialData] = useState();
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
        fetchtestomonialData();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchtestomonialData = async () => {
    try {
      let res = await testo_svc.getAllTestomonial();
      //key prop add to response data
      //DataTable will map single data with the help of keys and rowSelection function works;
      let addedKey = res?.result.map((item, index) => {
        item.key = index + 1;
        return item;
      });
      setTestomonialData(addedKey);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchtestomonialData();
    setInterval(() => {
      fetchtestomonialData();
    }, 30000);
  }, []);
  return (
    <Table
      size="medium"
      dataSource={testomonialData}
      style={{
        height: 475,
      }}
      bordered
      scroll={{ y: 350 }}
      columns={testomonialColumns}
      className="shadow table-container ant-table-width font-thin "
      pagination={false}
    />
  );
};

export default TestomonialTableData;
