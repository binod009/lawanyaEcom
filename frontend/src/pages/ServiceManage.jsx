import { Button, Input, message, Form } from "antd";
import React from "react";
import service_svc from "./service.Service";

const { TextArea } = Input;
const ServiceManage = () => {
  const [form] = Form.useForm();
  const submitServiceFrom = async (values) => {
    try {
      let res = await service_svc.createProgram(values);
      if (res) message.success(res.msg);
      form.resetFields();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="w-[45%] h-auto p-8 shadow">
        <h1 className="text-slate-700 font-bold text-lg">Create Program</h1>
        <Form
          className="font-medium text-[#122538]"
          form={form}
          layout="vertical"
          onFinish={submitServiceFrom}
        >
          <Form.Item
            label="Servicename"
            name="servicename"
            className="mt-5"
            rules={[{ required: true, message: "" }]}
          >
            <Input
              size="large"
              style={{ minWidth: 200, maxWidth: 500 }}
              placeholder="program name"
            />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            className="mt-5"
            style={{
              width: 510,
            }}
            rules={[{ required: true, message: "" }]}
          >
            <TextArea rows={6} />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 8 }}>
            <Button
              style={{
                height: 45,
              }}
              type="primary"
              className="bg-amber-500 createbtnhover py-5 "
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

export default ServiceManage;
