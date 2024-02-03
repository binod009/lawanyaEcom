import React from "react";
import { Button, Form, Input, Select, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";

const CarouselForm = () => {
  const submitCarouselFrom = async (values) => {
    let res = await axios.post("locahost:3005/banner", values);
    console.log(res);
  };

  const [form] = Form.useForm();
  const handleChange = (e) => {
    console.log("hello");
  };

  return (
    <>
      <div className="border-gray-300 p-5 mt-14 shadow-xl border-[1px]">
        <Form
          form={form}
          layout="vertical"
          onFinish={submitCarouselFrom}
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            className="fromItem"
            label="Banner name"
            name="bannername"
            rules={[{ required: true, message: "Reuqired*" }]}
          >
            <Input
              style={{
                height: 40,
                minWidth: 200,
                maxWidth: 500,
              }}
              placeholder="input placeholder"
            />
          </Form.Item>
          <Form.Item label="image" name="image">
            <Upload
              listType="picture-card"
              multiple={5}
              rules={[{ required: true, message: "Reuqired*" }]}
            >
              <Button className="border-0 bg-none" icon={<PlusOutlined />}>
                Upload
              </Button>
            </Upload>
          </Form.Item>
          <Form.Item
            label="status"
            name="status"
            rules={[{ required: true, message: "Reuqired*" }]}
          >
            <Select
              size="medium"
              defaultValue="lucy"
              style={{
                width: 200,
                height: 40,
              }}
              onChange={handleChange}
              options={[
                {
                  value: "active",
                  label: "active",
                },
                {
                  value: "inactive",
                  label: "inactive",
                },
              ]}
            />
          </Form.Item>
          <Button htmlType="submit" type="primary" className="bg-blue-500">
            Create
          </Button>
        </Form>
      </div>
    </>
  );
};

export default CarouselForm;
