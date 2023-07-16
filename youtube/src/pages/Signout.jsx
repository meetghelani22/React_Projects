import React, { useEffect } from "react";

const Signout = ({ update }) => {
  useEffect(() => {}, []);
  const logOut = () => {
    update(false);
    sessionStorage.removeItem("userData");
    // window.location.href = "/";
  };
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3>Welcome Meet Ghelani</h3>
            <button className="btn btn-danger" type="button" onClick={logOut}>
              Signout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signout;
