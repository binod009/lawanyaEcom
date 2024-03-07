import React, { useEffect, useState } from "react";
import { Button, Form, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import partner_svc from "./PartnerService";
import useFetchData from "../hooks/useFetchData";
import { generateRandomKey } from "../components/service/GenerateKey";
import { createPartnerAsync, resetfield } from "../slice/partner";
import { useDispatch, useSelector } from "react-redux";

const PartnerManage = () => {
  const { response, error, clearformfiled } = useSelector(
    (state) => state.partner
  );
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [file, setFile] = useState({});

  const submitParnterForm = (values) => {
    values.image = file;
    values.key = generateRandomKey();
    dispatch(createPartnerAsync(values));
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  useEffect(() => {
    response && messageApi.success(response);
    error && messageApi.error(error);
    if (clearformfiled) {
      form.resetFields();
      setFile({});
      dispatch(resetfield());
    }
  }, [response, error, clearformfiled]);

  return (
    <>
      {contextHolder}
      <div className="w-[45%] h-auto p-8 shadow">
        <h1 className="text-slate-700 font-bold text-lg">Create Parnters</h1>
        <Form
          className="flex items-center font-medium text-[#122538] space-x-10 p-1.5"
          form={form}
          layout="inline"
          onFinish={submitParnterForm}
        >
          <Form.Item
            name="image"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            className="mt-5"
            rules={[{ required: true, message: "" }]}
          >
            <Upload
              action=""
              style={{
                height: "70px",
              }}
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
          <Form.Item>
            <Button
              style={{
                height: 40,
              }}
              type="primary"
              className="bg-amber-500 createbtnhover mt-5 px-7"
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

export default PartnerManage;
