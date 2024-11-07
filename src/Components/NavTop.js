import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Bootstrap Icons CSS
import 'bootstrap/js/dist/dropdown';
import { Dropdown } from 'react-bootstrap';
import './Style/NavTop.css';

function NavTop() {
  const [isNavOpen, setIsNavOpen] = useState(true); // State to manage navbar visibility

  // Toggle the navbar visibility
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      {/* Menu button, visible only on small screens */}
      <button className="menu-button d-md-none btn btn-dark" onClick={toggleNav}>
        <i className="bi bi-list fs-3"></i>
      </button>

      {/* Navbar */}
      <nav className={`nav-overlay ${isNavOpen ? 'show' : ''}`} >
        <div className="row">
          <div className="bg-dark col-md-2 col-auto min-vh-100 d-flex justify-content-between flex-column py-2 w-100 w-sm-0">
            <div>
              <a className="text-decoration-none d-flex text-white ms-3 fs-5 mt-2 text-center">
                <i className="bi bi-speedometer"></i>
                <span className="ms-3 d-flex d-none d-sm-inline text-decoration-none">VSD</span>
              </a>
              <hr className="text-secondary"/>

              <ul className="nav nav-pills flex-column pt-1 mt-sm-0">
                <li className="nav-item text-white fs-5 py-1 py-sm-0">
                  <a href="#" className="nav-link text-white fs-5" aria-current="page">
                    <i className="bi bi-grid"></i>
                    <span className="ms-3 d-flex d-none d-sm-inline">Dashboard</span>
                  </a>
                </li>
                <li className="nav-item text-white fs-5 my-1 py-2 py-sm-0">
                  <a href="#" className="nav-link text-white fs-5" aria-current="page">
                    <i className="bi bi-house"></i>
                    <span className="ms-3 d-flex d-none d-sm-inline">Home</span>
                  </a>
                </li>
                <li className="nav-item text-white fs-5 my-1 py-2 py-sm-0">
                  <a href="#" className="nav-link text-white fs-5" aria-current="page">
                    <i className="bi bi-table"></i>
                    <span className="ms-3 d-flex d-none d-sm-inline">Order</span>
                  </a>
                </li>
                <li className="nav-item text-white fs-5 my-1 py-2 py-sm-0">
                  <a href="#" className="nav-link text-white fs-5" aria-current="page">
                    <i className="bi bi-people"></i>
                    <span className="ms-3 d-flex d-none d-sm-inline">Customer</span>
                  </a>
                </li>
              </ul>
            </div>
            
            {/* <Dropdown className="">
              <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="text-white text-decoration-none bg-dark p-3">
                <i className="bi bi-person-circle fs-5"></i>
                <span className="pl-2 d-flex d-none d-sm-inline fs-5 ms-3">Saiju</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavTop;
