import { Table, message } from "antd";
import React, { useEffect, useState } from "react";
import service_svc from "./service.Service";
import { MdDelete } from "react-icons/md";
const ServiceDataTable = () => {
  const [serviceData, setServiceData] = useState();

  const serviceColumns = [
    {
      title: "S.N",
      dataIndex: "key",
      rowScope: "row",
      width: 80,
    },
    {
      title: "Service name",
      dataIndex: "servicename",
      key: "servicename",
      render: (servicename) => <p>{servicename}</p>,
    },
    {
      title: "description",
      dataIndex: "description",
      key: "description",
      render: (description) => (
        <p className="text-clip">{service_svc.trimmer(description)}</p>
      ),
    },
    {
      title: "action",
      key: "_obj",

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

  const handleDelete = (id) => {
    try {
      let res = this.service_svc.deleteProgram(id);
      fetchServiceData();
    } catch (excp) {
      message.error(excp);
    }
  };

  const fetchServiceData = async () => {
    try {
      let res = await service_svc.getAllProgram();
      //key prop add to response data
      //DataTable will map single data with the help of keys and rowSelection function works;
      let addedKey = res?.result.map((item, index) => {
        item.key = index + 1;
        return item;
      });
      setServiceData(addedKey);
    } catch (excp) {
      message.error(excp);
    }
  };

  useEffect(() => {
    fetchServiceData();

    setInterval(() => {
      fetchServiceData();
    }, 30000);
  }, []);

  return (
    <>
      <Table
        size="medium"
        dataSource={serviceData}
        bordered
        style={{
          height: 460,
        }}
        scroll={{ y: 400 }}
        columns={serviceColumns}
        className="shadow table-container ant-table-width font-medium"
        pagination={false}
      />
    </>
  );
};

export default ServiceDataTable;
