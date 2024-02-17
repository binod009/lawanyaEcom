import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
const ProtectedRoute = ({ token, children }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("access_Token")) {
      setLoading(!loading);
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Spin spinning={loading} fullscreen />
      {!loading && children}
    </>
  );
};

export default ProtectedRoute;
