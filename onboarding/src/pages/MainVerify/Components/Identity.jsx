import React from "react";

const Identity = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="identityLeft">
          <div className="d-flex justify-content-between"></div>
          <h2 className="h2 fw-semibold mb-3">Identity Verification</h2>
          <p>
            We foster digital trust by applying various methods of identity
            verification to combat fraud and increase security - all with a
            single platform.
          </p>
        </div>
        <div className="identityRight mt-1 mt-xl-3">
          <a
            className="border-0 bg-transparent text-dark text-decoration-none"
            type="button"
            href="/onboarding-verification-view"
          >
            Skip
          </a>
        </div>
      </div>
      <div>
        <button type="button" className="onb-btn btn-primary px-5 py-3">
          Next
        </button>
      </div>
    </>
  );
};

export default Identity;
