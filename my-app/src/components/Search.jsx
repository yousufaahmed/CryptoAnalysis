import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CenteredSearchBar = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form className="w-75">
        <div className="input-group shadow-none" style={{ borderRadius: "50px" }}>
          <input
            type="text"
            className="form-control fs-4 border-0"
            placeholder="Search for something..."
            style={{
              height: "60px", // Reduced height
              padding: "0.5rem", // Reduced padding
              borderTopLeftRadius: "50px",
              borderBottomLeftRadius: "50px",
              boxShadow: "none", // Remove box-shadow
            }}
          />
          <button
            className="btn btn-primary fs-4"
            type="submit"
            style={{
              height: "60px", // Reduced height
              padding: "0.5rem", // Reduced padding
              borderTopRightRadius: "50px",
              borderBottomRightRadius: "50px",
              boxShadow: "none", // Remove box-shadow
              border: "none", // Remove button border
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
