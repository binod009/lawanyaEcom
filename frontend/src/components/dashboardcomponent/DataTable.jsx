import { Table, Tag, Image, message } from "antd";
import React, { useEffect, useState } from "react";

import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchdataAsync,
  clear_response,
  carouseldeleteAsync,
} from "../../slice/carousel";
const DataTable = () => {
  const { values, response, error } = useSelector((state) => state.carousel);
  const [messageApi, contextHolder] = message.useMessage();
  console.log("coming from redux", values);
  const dispatch = useDispatch();
  const CarouselColumns = [
    {
      key: "bannerName",
      title: "banner Name",
      dataIndex: "bannername",

      render: (bannername) => <p>{bannername}</p>,
    },
    {
      title: "image",
      dataIndex: "image",
      key: "image",
      render: (_, { image }) => (
        <Image
          width={25}
          height={25}
          className="rounded-full"
          src={process.env.REACT_APP_API_URL + image}
        />
      ),
    },
    {
      title: "status",
      key: "status",
      dataIndex: "status",
      render: (_, { status }) =>
        status === "inactive" ? (
          <Tag color="blue">{status}</Tag>
        ) : (
          <Tag color="success">{status}</Tag>
        ),
    },

    {
      title: "action",
      dataIndex: "_id",
      key: "_id",
      fixed: "right",
      width: 120,
      render: (_, { _id }) => (
        <MdDelete
          color="red"
          size={28}
          className="hover:scale-125 transition-all ease"
          onClick={() => dispatch(carouseldeleteAsync(_id))}
        />
      ),
    },
  ];

  // const fetchBannerData = async () => {
  //   try {
  //     let res = await carousel_svc.getAllCarousel();
  //     if (res.result.length > 0) {
  //       let addedKey = res?.result.map((item, index) => {
  //         item.key = index + 1;
  //         return item;
  //       });

  //       dispatch(update_carousel(addedKey));
  //     }

  //     //key prop add to response data
  //     //DataTable will map single data with the help of keys and rowSelection function works;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    if (values.length === 0) {
      console.log("Mylenght", values.length);
      dispatch(fetchdataAsync());
    }
    if (response) {
      messageApi.success(response);
      dispatch(clear_response());
    }
  }, [response, error]);

  return (
    <>
      {contextHolder}
      <Table
        size="medium"
        style={{
          height: 455,
        }}
        dataSource={values}
        bordered
        scroll={{ y: 350 }}
        columns={CarouselColumns}
        className="shadow  ant-table-width font-thin "
        pagination={false}
      />
    </>
  );
};

export default DataTable;
