import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  createEventAsync,
  clear_response,
  set_btnloading,
} from "../slice/event";
import { generateRandomKey } from "../components/service/GenerateKey";
const timezone = require("dayjs/plugin/timezone");
const utc = require("dayjs/plugin/utc");
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Kathmandu");

const ManageEvent = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const { eventdata, response, error, btn_loading } = useSelector(
    (state) => state.event
  );
  const dispatch = useDispatch();
  const [file, setFile] = useState({});

  const submitEventForm = async (values) => {
    dispatch(set_btnloading());
    values.eventimage = file;
    values.key = generateRandomKey();
    dispatch(createEventAsync(values));
  };

  useEffect(() => {
    if (response) {
      messageApi.success(response);
      form.resetFields();
      dispatch(clear_response());
    }
    error && messageApi.error(error);
  }, [eventdata]);

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <>
      {contextHolder}
      <div className=" w-[45%] h-auto p-5 pl-10 shadow">
        <h1 className="text-slate-700 font-bold text-lg">Create Event</h1>
        <Form
          className="font-medium text-[#122538]"
          form={form}
          layout="vertical"
          onFinish={submitEventForm}
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
              loading={btn_loading}
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
