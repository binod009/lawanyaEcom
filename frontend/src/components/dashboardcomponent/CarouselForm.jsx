import React, { useState } from "react";
import { Button, Form, Input, Select, Upload, message } from "antd";
import carousel_svc from "./CarouselService";
import { UploadOutlined } from "@ant-design/icons";

const CarouselForm = () => {
  const [file, setFile] = useState({});
  const submitCarouselFrom = async (values) => {
    values.image = file;

    try {
      let res = await carousel_svc.CreateCarousel(values);
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
        <h1 className="text-slate-700 font-bold text-lg">Create Carousel</h1>
        <Form
          className="font-medium text-[#122538]"
          form={form}
          layout="vertical"
          onFinish={submitCarouselFrom}
        >
          <Form.Item
            label="Banner name"
            name="bannerName"
            className="mt-5"
            rules={[{ required: true, message: "" }]}
          >
            <Input
              size="large"
              style={{
                minWidth: 200,
                maxWidth: 500,
              }}
              placeholder="banner name"
            />
          </Form.Item>
          <Form.Item
            name="image"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            className="mt-5"
            label="image"
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
            label="Status"
            name="status"
            className="mt-5"
            rules={[{ required: true, message: "" }]}
          >
            <Select
              size="large"
              style={{
                minWidth: 200,
                maxWidth: 500,
              }}
            >
              <Select.Option value="active">active</Select.Option>
              <Select.Option value="inactive">inactive</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 8 }}>
            <Button
              style={{
                height: 45,
              }}
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

export default CarouselForm;
