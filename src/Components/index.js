import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Bootstrap Icons CSS
// Importing Bootstrap dropdown functionality
import 'bootstrap/js/dist/dropdown';
import { Dropdown } from 'react-bootstrap';
import './Style/NavTop.css';
// Your custom JavaScript code here
import { Link } from 'react-router-dom';


function index() {
  return (
  <nav >
    <div className="row">
      <div className="bg-dark col-md-2 col-auto min-vh-100 d-flex justify-content-between flex-column py-2 w-100 w-sm-0">         
        <div>
          
          <a class="text-decoration-none d-flex text-white ms-3 fs-5 mt-2 text-center">
              
                <i className='bi bi-speedometer'></i>
                <span className="ms-3  d-flex d-none d-sm-inline text-decoration-none">VSD</span>
            
            </a>
          <hr className="text-secondary"/>

          <ul class="nav nav-pills flex-column pt-1 mt-sm-0">
            <li class="nav-item text-white fs-5  py-1 py-sm-0">
              <a href="#" class="nav-link  text-white fs-5" aria-current="page">
                <i className='bi bi-grid'></i>
                <span className="ms-3  d-flex d-none d-sm-inline">Dashboard</span>
              </a>
            </li>

            <li class="nav-item text-white fs-5 my-1 py-2 py-sm-0">
              <a href="#" class="nav-link  text-white fs-5" aria-current="page">
                <i className='bi bi-house'></i>
                <span className="ms-3  d-flex d-none d-sm-inline">Home</span>
              </a>
            </li>

            <li class="nav-item text-white fs-5 my-1 py-2 py-sm-0">
              <a href="#" class="nav-link  text-white fs-5" aria-current="page">
                <i className='bi bi-table'></i>
                <span className="ms-3  d-flex d-none d-sm-inline">Order</span>
              </a>
            </li>
            <li class="nav-item text-white fs-5 my-1 py-2 py-sm-0">
              <a href="#" class="nav-link  text-white fs-5" aria-current="page">
                <i className='bi bi-people'></i>
                <span className="ms-3  d-flex d-none d-sm-inline">Customer</span>
              </a>
            </li>


          </ul>
        </div>
        
        <Dropdown className="ms-2 ml-5 ml-sm-0 " >
          <Dropdown.Toggle variant="secondary" id="dropdown-basic" class="text-white text-decoration-none bg-dark p-3 ml-3" >
          <i className="bi bi-person-circle fs-5"></i>
          <span className="pl-2 d-flex d-none d-sm-inline fs-5 ms-3" > Saiju</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* <div class="dropdown open">
          <a class="text-decoration-none text-white dropdown-toggle p-3" type="button" id="triggerId" aria-expanded="false">
            <i className="bi bi-person-circle"></i>
            <span className="ms-2">Saiju</span>
            <div class="dropdown-menu" aria-labelledby="triggerId">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Disabled Action</a>

            </div>
          </a>
        </div> */}
      </div>

    </div>
  </nav>  
  );
}

export default index;