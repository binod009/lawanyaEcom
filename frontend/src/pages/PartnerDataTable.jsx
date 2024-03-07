import { Image, Table, message } from "antd";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import useFetchData from "../hooks/useFetchData";
import partner_svc from "./PartnerService";
import {
  deletePartnerAsync,
  fetchpartnerDataAsync,
  clear_response,
  resetfield,
} from "../slice/partner";
import { useDispatch, useSelector } from "react-redux";
const PartnerDataTable = () => {
  const { partnerdata, response, error } = useSelector(
    (state) => state.partner
  );
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const PartnerColumns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "eventimage",
      render: (_, { image }) => (
        <Image
          width={80}
          height={80}
          className="rounded-full"
          src={process.env.REACT_APP_API_URL + image}
        />
      ),
    },

    {
      title: "action",
      key: "_id",
      dataIndex: "_id",
      fixed: "right",
      width: 120,
      render: (_, { _id }) => (
        <MdDelete
          className="cursor-pointer hover:scale-125"
          size={28}
          color="red"
          onClick={() => {
            dispatch(deletePartnerAsync(_id));
          }}
        />
      ),
    },
  ];

  useEffect(() => {
    if (partnerdata.length === 0) {
      dispatch(fetchpartnerDataAsync());
    }
    if (response) {
      messageApi.success(response);
      dispatch(clear_response());
    }
    error && messageApi.error(error);
  }, [response, error]);
  return (
    <>
      {contextHolder}
      <Table
        size="medium"
        style={{
          height: "170px",
        }}
        scroll={{ y: 130 }}
        dataSource={partnerdata}
        columns={PartnerColumns}
        className="shadow table-container ant-table-width font-medium"
        pagination={false}
      />
    </>
  );
};

export default PartnerDataTable;
