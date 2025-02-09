import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CenteredSearchBar = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form className="w-75">
        <div className="input-group shadow-lg" style={{ borderRadius: "50px" }}>
          <input
            type="text"
            className="form-control fs-4 border-0"
            placeholder="Search for something..."
            style={{
              height: "70px", // Ensures consistent height
              borderTopLeftRadius: "50px",
              borderBottomLeftRadius: "50px",
              boxShadow: "none",
            }}
          />
          <button
            className="btn btn-primary fs-4 px-5"
            type="submit"
            style={{
              height: "70px",
              borderTopRightRadius: "50px",
              borderBottomRightRadius: "50px",
              boxShadow: "none",
            }}
          >
            🔍 Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default CenteredSearchBar;


