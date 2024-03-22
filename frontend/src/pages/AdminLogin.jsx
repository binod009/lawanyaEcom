import { Button, Input, Form, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { set_loggedInUser } from "../slice/auth";
import { useState } from "react";
import auth_svc from "../components/service/auth.servies";
import { toast } from "react-toastify";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const [spinnerloading, setSpinnerLoading] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    setSpinnerLoading(true);
    let user = await auth_svc.login(values);
    setSpinnerLoading(false);
    if (user) {
      dispatch(set_loggedInUser(user));
      setSpinnerLoading(false);
      toast.success("welcome admin");
      navigate("/admin");
    }
  };

  return (
    <>
      <div className="bg-[rgb(243,230,230)] h-screen w-full flex items-center ">
        <div className="lg:max-w-7xl mx-auto">
          <div className="py-5 px-8 m-auto w-[520px] bg-[#fff] rounded-md h-[395px] shadow-2xl ">
            <Form
              initialValues={{ remember: true }}
              preserve={true}
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "" },
                  { type: "email", message: "invalid email type" },
                ]}
              >
                <Input className="h-12" />
                {/* {errData?.email && (
                  <span className="text-red-500">{errData.email}</span>
                )} */}
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                className="mb-3"
                rules={[
                  {
                    required: true,
                    message: "",
                  },
                ]}
              >
                <Input.Password className="h-12" />
              </Form.Item>
              <button>Forgot Password ?</button>
              <Button
                type="primary"
                className="buttonhover bg-amber-700 w-full h-12 mt-4"
                htmlType="submit"
              >
                Login
              </Button>
              <div className="mt-1.5 flex flex-col items-center justify-center p-1.5 space-y-1">
                <button>Do not have an account ?</button>
                <button href="" className="text-amber-900 font-bold">
                  Sign Up
                </button>
              </div>
            </Form>
          </div>
        </div>
        {spinnerloading && (
          <Spin
            size="large"
            style={{
              margin: "auto",
              position: "absolute",
              zIndex: 3,
              left: "50%",
            }}
          />
        )}
      </div>
    </>
  );
};

export default AdminLogin;
