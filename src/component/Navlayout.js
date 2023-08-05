import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
export default function Navlayout() {
  return (
    <div class="container">
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><b>CRC-Training</b></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
          <Link className="nav-link active" aria-current="page" to="/showportfolio">Task</Link>
        </li>
        
        <li clasNameclassNames="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
     <Outlet/>  
    </div>
    
  )
}
