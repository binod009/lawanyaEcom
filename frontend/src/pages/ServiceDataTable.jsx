import { Table, message } from "antd";
import React, { useEffect, useState } from "react";
import service_svc from "./service.Service";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteProgramAsync, fetchprogramDataAsync } from "../slice/program";
import { clear_response, setloading } from "../slice/partner";

const ServiceDataTable = () => {
  const { programdata, response, error, loading } = useSelector(
    (state) => state.program
  );

  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage({
    duration: 1,
    top: 10,
  });

  const serviceColumns = [
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
      key: "_id",
      dataIndex: "_id",
      width: 120,
      render: (_, { _id }) => (
        <MdDelete
          className="cursor-pointer hover:scale-125"
          size={24}
          color="red"
          onClick={() => {
            dispatch(deleteProgramAsync(_id));
          }}
        />
      ),
    },
  ];

  useEffect(() => {
    if (programdata.length === 0) {
      dispatch(fetchprogramDataAsync());
    }
    if (response) {
      messageApi.success(response);
      dispatch(clear_response());
    }
    error && messageApi.error(error);
  }, [programdata]);

  return (
    <>
      {contextHolder}
      <Table
        size="medium"
        dataSource={programdata}
        bordered
        style={{
          height: 460,
        }}
        loading={loading}
        scroll={{ y: 400 }}
        columns={serviceColumns}
        className="shadow table-container ant-table-width font-medium"
        pagination={false}
      />
    </>
  );
};

export default ServiceDataTable;
