import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
const Loader = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;

  return (
    <div className="container-fluid">
      <div className="vh-100 d-flex justify-content-center align-items-center container">
        <Spin className="text-dark" indicator={antIcon} />
      </div>
    </div>
  );
};

export default Loader;
