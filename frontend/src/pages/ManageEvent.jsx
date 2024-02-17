import React, { useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  TimePicker,
  Upload,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import event_svc from "./EventService";
const timezone = require("dayjs/plugin/timezone");
const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Kathmandu");

const ManageEvent = () => {
  const [file, setFile] = useState({});
  const submitCarouselFrom = async (values) => {
    values.eventimage = file;
    console.log("frontend", values);
    try {
      let res = await event_svc.createEvent(values);
      if (res) message.success(res.msg);
      form.resetFields();
      setFile({});
    } catch (err) {
      console.log(err);
    }
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const [form] = Form.useForm();
  return (
    <>
      <div className=" w-[45%] h-auto p-5 pl-10 shadow">
        <h1 className="text-slate-700 font-bold text-lg">Create Event</h1>
        <Form
          className="font-medium text-[#122538]"
          form={form}
          layout="vertical"
          onFinish={submitCarouselFrom}
        >
          <Form.Item
            name="eventimage"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            className="mt-5"
            rules={[{ required: true, message: "" }]}
          >
            <Upload
              action=""
              listType="picture"
              className="upload-list-inline"
              beforeUpload={(file) => {
                setFile(file);
                return false;
              }}
            >
              <Button icon={<UploadOutlined />}>Select File</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            name="time"
            label="Time"
            rules={[{ required: true, message: true }]}
          >
            <TimePicker use12Hours format="h:mm:ss A" />
          </Form.Item>
          <Form.Item
            name="eventdate"
            className="mt-5"
            label="Date"
            rules={[{ required: true, message: "" }]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            className="mt-5"
            rules={[{ required: true, message: "" }]}
          >
            <Input
              size="large"
              style={{
                minWidth: 200,
                maxWidth: 500,
              }}
              placeholder="description"
            />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 8 }}>
            <Button
              size="large"
              type="primary"
              className="bg-amber-500 createbtnhover "
              block
              htmlType="submit"
            >
              Create
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default ManageEvent;
