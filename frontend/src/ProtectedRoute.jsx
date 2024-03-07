import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getloggedInUser } from "./slice/auth";
const ProtectedRoute = ({ children, accessTo }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { authdata } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!authdata) {
      navigate("/login");
    } else {
      setLoading(false);
    }
  }, [authdata]);

  return (
    <>
      <Spin spinning={loading} fullscreen />
      {!loading ? children : ""}
    </>
  );
};

export default ProtectedRoute;
