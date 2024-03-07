import { Button, Form, Input, Upload, message } from "antd";
import React, { useEffect, useState } from "react";
import testo_svc from "./TestomonialService";
import { UploadOutlined } from "@ant-design/icons";
import { generateRandomKey } from "../components/service/GenerateKey";
import { clear_response, createTestoAsync } from "../slice/testomonial";
import { useDispatch, useSelector } from "react-redux";
const ManageTestomonial = () => {
  const { testomonialData, response, error, btn_loading } = useSelector(
    (state) => state.testomonial
  );
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage({
    duration: 1,
  });
  const [file, setFile] = useState();
  const { TextArea } = Input;

  const submittestomonialFrom = async (values) => {
    values.clientimage = file;
    values.key = generateRandomKey();
    dispatch(createTestoAsync(values));
  };
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  useEffect(() => {
    if (response) {
      messageApi.success(response);
      dispatch(clear_response());
      form.resetFields();
    }

    error && messageApi.error(error);
  }, []);

  return (
    <>
      {contextHolder}
      <div className=" w-[45%] h-auto p-5 shadow">
        <h1 className="text-slate-700 font-bold text-lg">Create Testomonial</h1>
        <Form
          className="font-medium text-[#122538]"
          form={form}
          layout="vertical"
          onFinish={submittestomonialFrom}
        >
          <Form.Item
            label="clientname"
            name="clientname"
            className="mt-5"
            rules={[{ required: true, message: "" }]}
          >
            <Input
              size="large"
              style={{
                minWidth: 200,
                maxWidth: 500,
              }}
              placeholder="name"
            />
          </Form.Item>
          <Form.Item
            name="clientimage"
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
              <Button icon={<UploadOutlined />}>client Image</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            label="client review"
            name="clientreview"
            style={{
              width: 510,
            }}
            className="mt-5"
            rules={[{ required: true, message: "" }]}
          >
            <TextArea rows={5} />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 8 }}>
            <Button
              style={{
                height: 45,
              }}
              loading={btn_loading}
              type="primary"
              className="bg-amber-500 buttonhover "
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

export default ManageTestomonial;
