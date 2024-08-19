import React from 'react';
import './Navbar.css';
import logo from '../image/Logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <nav className="navbar navbar-expand-sm navbar-light  p-0 ps-5">
            <div className="container-fluid">
              <a className="navbar-brand ps-5" href="#">GRREEN CARD</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">GIFT CARD</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">STORE LOCATOR</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">TRACK ORDER</a>
                  </li>
                </ul>
              </div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 pe-5">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">ENTIRE COLLECTION</a>
                </li>
                <li className="nav-item">
                    <div className="form-check form-switch pt-2">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" for="flexSwitchCheckDefault"></label>
                      </div>
                </li>
                <li class="nav-item pe-5">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shop-window" viewBox="0 0 16 16">
                        <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5m2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5"/>
                      </svg>STORE MODE</a>
                  </li>
              </ul>
            </div>  
          </nav>
    <nav class="navbar navbar-expand-lg navbar-light bg-info ">
        <div class="container"> 
          <Link class="navbar-brand ms-5 ps-5 " to="/"><img src={logo} alt=''/></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  mb-2 mb-lg-0  me-5 ">
              <li class="nav-item p-0 ">
                <Link class="nav-link active" aria-current="page" to="/women">WOMEN</Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link active" aria-current="page" to="/men">MEN</Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link active" aria-current="page" to="/kids">KIDS</Link>
              </li>
              <li class="nav-item ">
                <a class="nav-link active" aria-current="page" href="#">HOME</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link active" aria-current="page" href="#">BRANDS</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link active" aria-current="page" href="#">BEAUTY</a>
              </li>
            </ul>
            <form class="d-flex ">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            </form>
            <ul class="navbar-nav  mb-2 mb-lg-0 me-5">
                <li class="nav-item ">
                    <Link class="nav-link active" aria-current="page" to="/login"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
                      </svg></Link>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link active" aria-current="page" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/>
                      </svg></a>
                  </li>
                  <li class="nav-item me-5">
                    <Link class="nav-link active" aria-current="page" to="/cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                      </svg></Link>
                  </li>
            </ul>
          </div>
        </div>
      </nav>
     
    </>
  )
}

export default Navbar

