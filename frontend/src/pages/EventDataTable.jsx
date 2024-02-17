import { Image, Table, message } from "antd";
import React, { useEffect, useState } from "react";
import event_svc from "./EventService";
import { MdDelete } from "react-icons/md";
const EventDataTable = () => {
  const [eventData, setEventData] = useState();
  const EventColumns = [
    {
      title: "S.N",
      dataIndex: "key",
      rowScope: "row",
      width: 80,
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "eventimage",
      render: (_, { eventimage }) => (
        <Image
          className="rounded-full h-14 w-14"
          src={process.env.REACT_APP_API_URL + eventimage}
        />
      ),
    },
    {
      title: "event starting date",
      key: "eventdate",
      dataIndex: "eventdate",
      render: (ed) => <p>{event_svc.convertDateFormat(ed.eventdate)}</p>,
    },
    {
      title: "Event starting time",
      key: "time",
      dataIndex: "time",
      render: (time) => <p>{time}</p>,
    },

    {
      title: "Event description",
      dataIndex: "description",
      key: "description",
      render: (desc) => <p>{desc}</p>,
    },
    {
      title: "action",
      key: "_obj",
      fixed: "right",

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
      let res = await event_svc.deleteEventById(id);
      if (res) {
        message.success(res.msg);
        fetchEventData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchEventData = async () => {
    try {
      let res = await event_svc.getAllEvents();
      //key prop add to response data
      //DataTable will map single data with the help of keys and rowSelection function works;
      let addedKey = res?.result.map((item, index) => {
        item.key = index + 1;
        return item;
      });
      setEventData(addedKey);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchEventData();
    setInterval(() => {
      fetchEventData();
    }, 30000);
  }, []);
  return (
    <>
      <Table
        size="medium"
        dataSource={eventData}
        style={{
          height: 475,
        }}
        bordered
        scroll={{ y: 350 }}
        columns={EventColumns}
        className="shadow table-container ant-table-width font-thin "
        pagination={false}
      />
    </>
  );
};

export default EventDataTable;
