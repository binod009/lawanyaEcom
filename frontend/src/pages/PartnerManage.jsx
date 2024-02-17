import React, { useState } from "react";
import { Button, Form, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import partner_svc from "./PartnerService";

const PartnerManage = () => {
  const [file, setFile] = useState({});
  const submitParnterForm = async (values) => {
    console.log("values", values);
    values.image = file;
    try {
      let res = await partner_svc.createParnter(values);
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
      <div className="w-[45%] h-auto p-8 shadow">
        <h1 className="text-slate-700 font-bold text-lg">Create Parnters</h1>
        <Form
          className="font-medium text-[#122538] space-x-10 p-1.5"
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
                height: 45,
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
