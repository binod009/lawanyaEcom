import { Image, Table, message } from "antd";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import partner_svc from "./PartnerService";
const PartnerDataTable = () => {
  const [partnerData, setPartnerData] = useState();
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
      key: "_obj",
      fixed: "right",
      width: 120,
      render: (_, _obj) => (
        <MdDelete
          className="cursor-pointer hover:scale-125"
          size={28}
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
      let res = await partner_svc.deletePartnerById(id);
      if (res) {
        message.success(res.msg);
        fetchPartnerData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPartnerData = async () => {
    try {
      let res = await partner_svc.getAllPartner();
      //key prop add to response data
      //DataTable will map single data with the help of keys and rowSelection function works;
      let addedKey = res?.result.map((item, index) => {
        item.key = index + 1;
        return item;
      });
      setPartnerData(addedKey);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPartnerData();
    setInterval(() => {
      fetchPartnerData();
    }, 30000);
  }, []);
  return (
    <>
      <Table
        size="medium"
        style={{
          height: "170px",
        }}
        scroll={{ y: 130 }}
        dataSource={partnerData}
        columns={PartnerColumns}
        className="shadow table-container ant-table-width font-medium"
        pagination={false}
      />
    </>
  );
};

export default PartnerDataTable;
