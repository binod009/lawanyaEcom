import { Button, Input, message, Form } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createProgramAsync,
  set_btnloading,
  clear_response,
} from "../slice/program";
import { generateRandomKey } from "../components/service/GenerateKey";

const { TextArea } = Input;
const ServiceManage = () => {
  const { response, error, btn_loading } = useSelector(
    (state) => state.program
  );
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const submitServiceFrom = async (values) => {
    dispatch(set_btnloading());
    values.key = generateRandomKey();
    dispatch(createProgramAsync(values));
  };

  useEffect(() => {
    error && messageApi.error(error);
    if (response) {
      messageApi.success(response);
      dispatch(clear_response());
    }
    form.resetFields();
  }, [error, response]);

  return (
    <>
      {contextHolder}
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
              width: 450,
            }}
            rules={[{ required: true, message: "" }]}
          >
            <TextArea rows={6} />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 6 }}>
            <Button
              style={{
                height: 45,
              }}
              loading={btn_loading}
              type="primary"
              className="bg-amber-500 createbtnhover mt-5 px-12"
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
