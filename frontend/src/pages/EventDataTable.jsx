import { Image, Table, message } from "antd";
import React, { useEffect, useState } from "react";
import event_svc from "./EventService";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { fetchEventDataAsync, clear_response } from "../slice/event";
import { eventdeleteAsync } from "../slice/event";
import service_svc from "../pages/service.Service";
const EventDataTable = () => {
  const { eventdata, response, error, table_Loading } = useSelector(
    (state) => state.event
  );
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const EventColumns = [
    {
      title: "Image",
      dataIndex: "eventimage",
      key: "eventimage",
      render: (_, { eventimage }) => (
        <Image
          width={50}
          height={50}
          className="rounded-md"
          src={process.env.REACT_APP_API_URL + eventimage}
        />
      ),
    },
    {
      title: "event starting date",
      key: "eventdate",
      dataIndex: "eventdate",
      render: (_, ed) => <p>{event_svc.convertDateFormat(ed.eventdate)}</p>,
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
      render: (desc) => (
        <p className="text-ellipsis">{service_svc.trimmer(desc)}</p>
      ),
    },
    {
      title: "action",
      dataIndex: "_id",
      key: "_id",
      fixed: "right",
      render: (_, { _id }) => (
        <MdDelete
          className="cursor-pointer hover:scale-125"
          size={24}
          color="red"
          onClick={() => {
            dispatch(eventdeleteAsync(_id));
          }}
        />
      ),
    },
  ];

  useEffect(() => {
    if (eventdata.length === 0) {
      dispatch(fetchEventDataAsync());
    }
    if (response) {
      messageApi.success(response);
      dispatch(clear_response());
    }
    error && messageApi.error(error);
  }, []);

  return (
    <>
      {contextHolder}
      <Table
        size="medium"
        dataSource={eventdata}
        style={{
          height: 475,
        }}
        loading={table_Loading}
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
