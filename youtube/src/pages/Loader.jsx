import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const Loader = () => {
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 100, color: "red" }} spin />
  );

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 container">
      <Spin className="text-dark" indicator={antIcon} />
    </div>
  );
};

export default Loader;
