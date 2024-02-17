import { Table, Tag, Image, message } from "antd";
import React, { useEffect, useState } from "react";
import carousel_svc from "./CarouselService";
import { MdDelete } from "react-icons/md";

const DataTable = () => {
  const [carouselData, setCarouselData] = useState();
  const CarouselColumns = [
    {
      title: "banner Name",
      dataIndex: "bannerName",
      key: "bannerName",
      render: (bannerName) => <p>{bannerName}</p>,
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
      key: "_obj",
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
      let res = await carousel_svc.deleteCarouselById(id);
      if (res) {
        message.success(res.msg);
        fetchBannerData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // if (!localStorage.getItem("access_Token")) navigate("/login");
  const fetchBannerData = async () => {
    try {
      let res = await carousel_svc.getAllCarousel();
      let addedKey = res?.result.map((item, index) => {
        item.key = index + 1;
        return item;
      });
      setCarouselData(addedKey);
      //key prop add to response data
      //DataTable will map single data with the help of keys and rowSelection function works;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBannerData();
    setInterval(() => {
      fetchBannerData();
    }, 30000);
  }, []);
  return (
    <>
      <Table
        size="medium"
        dataSource={carouselData}
        style={{
          height: 455,
        }}
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
