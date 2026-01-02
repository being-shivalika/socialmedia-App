import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark  sidebar"
        style={{ width: "200px" }}
      >
        {" "}
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          {" "}
          <svg
            className="bi pe-none me-2"
            width="40"
            height="32"
            aria-hidden="true"
          >
            <use xlinkHref="#bootstrap"></use>
          </svg>{" "}
          <span className="fs-4">Sidebar</span>{" "}
        </Link>{" "}
        <hr />{" "}
        <ul className="nav nav-pills flex-column mb-auto">
          {" "}
          <li className="nav-item">
            {" "}
            <a href="/" className="nav-link text-white ">
              {" "}
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use xlinkHref="#home"></use>
              </svg>
              Home
            </a>{" "}
          </li>{" "}
          <li>
            {" "}
            <Link to="/create" className="nav-link text-white">
              {" "}
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use xlinkHref="#speedometer2"></use>
              </svg>
              Create Post
            </Link>{" "}
          </li>{" "}
        </ul>{" "}
      </div>
    </>
  );
};

export default SideBar;
