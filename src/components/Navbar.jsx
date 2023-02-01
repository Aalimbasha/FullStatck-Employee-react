import React from 'react';
import Searchbar from './Searchbar';


function Navbar() {
  return (
    <div>
        <div className="container-fluid  mb-4 ">
        <nav class="navbar navbar-expand-lg navbar-light p-3" >
  <a class="navbar-brand ms-5" href="#"><i className="fa-solid fa-helmet-safety fa-3x"></i></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarNav">
    <ul class="navbar-nav  mx-auto ">
      <li class="nav-item"><a class="nav-link   " href="#"><strong className=' home shadow p-2 m-2'>Home</strong></a></li>
      <li class="nav-item"><a class="nav-link   " href="#"><strong className=' employee shadow p-2 m-2'>Employees</strong></a></li>
      <li class="nav-item"><a class="nav-link   " href="#"><strong className=' about shadow p-2 m-2'>About</strong></a></li>
    </ul>

    <Searchbar className='w-75'/>
   
    <div className="account ms-auto  d-flex mb-2" >

    <select className='form-control shadow me-5' title='Languages' style={{backgroundColor:"rgb(255,193,7)",outline:"none",border:"none"}}>
    <option value="Languages"><strong>Languages</strong></option>
    <option value="English">English</option>
    <option value="Hindi">Hindi</option>
    <option value="China">China</option>
    <option value="urudu">Urudhu</option>
  </select>

    
    <i className="fa-solid fa-circle-user fa-2x me-5 btn border-0 " title=' Login Account'></i>
    </div>
  </div>

</nav>

        </div>
    </div>
  )
}

export default Navbar