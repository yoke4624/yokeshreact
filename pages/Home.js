import React from 'react'
import './Home.css'
import Home1 from '../image/Mehm1.jpg'
import Home2 from '../image/Mehm2.jpg'
import Home3 from '../image/Mehm3.jpg'
import Wo1 from '../image/Wo1.webp'
import Wo2 from '../image/Wo2.jfif'
import Wo3 from '../image/Wo3.webp'
import Wo4 from '../image/Wo4.avif'
import Wo5 from '../image/Wo5.avif'
import Wo6 from '../image/Wo6.webp'
import Kd1 from '../image/Kd1.webp'
import Kd2 from '../image/Kd2.jpg'
import Kd3 from '../image/Kd3.avif'
import Kd4 from '../image/Kd4.jfif'
import Kd5 from '../image/Kd5.avif'
import Kd6 from '../image/Kd6.avif'
import Hproduct from '../product/Hproduct'

const Home = () => {
  return (
    <div>
     <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img  src={Home1} class="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={Home2} class="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={Home3} class="d-block w-100" alt="..."/>
          </div>
          
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <section className="who">
        <div>
        <h4>Deals of the Day</h4>
      </div>
      
      <div className="container">  
      <div className="row">
        {Hproduct.map((item)=>(
        <div className="col-lg-2">
       <div className='card' key={item.id}>
            <img src={item.image} alt='' />
            <div className='card-body'>
               <h1>{item.title}</h1>
                   <p class="card-text"><h5 class="card-title"><span class="badge rounded-pill bg-primary">15% OFF</span>Bargain buy</h5></p>
                <p className="card-text">{item.ds} <br/> </p>
               <p>₹ {item.price}</p>
              <button className='btn btn-primary'>Add to cart</button>
            </div>
          </div>
         </div>
              ))}
      </div> 
      </div> 
    </section>
    <section className="new">
       <h4>New Arrivals</h4>
       <div className="container">  
        <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
          <div className="col-lg-2">
            <div className="card">
            <img src={Wo6} class="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">FOREVER GLAM</h5>
                <p className="card-text">Pink Printed Casual Cotton Women.... <br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                  </svg>299
                </p> <button className='btn btn-primary'>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card">
              <img src={Wo1} class="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">FOREVER GLAM</h5>
                <p className="card-text">Pink Printed Casual Cotton Women.... <br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                  </svg>299
                </p> <button className='btn btn-primary'>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card">
            <img src={Wo2} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">FOREVER GLAM</h5>
                <p className="card-text">Pink Printed Casual Cotton Women.... <br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                  </svg>299
                </p> <button className='btn btn-primary'>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card">
            <img src={Wo3} class="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">FOREVER GLAM</h5>
                <p className="card-text">Pink Printed Casual Cotton Women.... <br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                  </svg>299
                </p> <button className='btn btn-primary'>Add to cart</button>
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="card">
            <img src={Wo4} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">FOREVER GLAM</h5>
                <p class="card-text">Pink Printed Casual Cotton Women.... <br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                  </svg>299
                </p> <button className='btn btn-primary'>Add to cart</button>
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="card">
            <img src={Wo5} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">FOREVER GLAM</h5>
                <p class="card-text">Pink Printed Casual Cotton Women.... <br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                  </svg>299
                </p> <button className='btn btn-primary'>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
       </div>
    </section>
    <section class="old">
      <h4>Trending Now</h4>
      <div class="container">  
       <div class="row row-cols-1 row-cols-md-3 g-4 my-5">
         <div class="col-lg-2">
           <div class="card">
             <img src={Kd1} class="card-img-top" alt="..."/>
             <div class="card-body">
               <h5 class="card-title">BYFORD</h5>
               <p class="card-text">Black Solid Casual Half Sleeves Polo  <br/>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                   <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                 </svg>999
               </p> <button className='btn btn-primary'>Add to cart</button>
             </div>
           </div>
         </div>
         <div class="col-lg-2">
           <div class="card">
           <img src={Kd2} class="card-img-top" alt="..."/>
             <div class="card-body">
              <h5 class="card-title">BYFORD</h5>
               <p class="card-text">Black Solid Casual Half Sleeves Polo  <br/>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                   <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                 </svg>999 <span class="oldspa1">35% OFF</span>
               </p> <button className='btn btn-primary'>Add to cart</button>
             </div>
           </div>
         </div>
         <div class="col-lg-2">
           <div class="card">
           <img src={Kd3} class="card-img-top" alt="..."/>
             <div class="card-body">
              <h5 class="card-title">BYFORD</h5>
               <p class="card-text">Black Solid Casual Half Sleeves Polo  <br/>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                   <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                 </svg>999 <span class="oldspa1">35% OFF</span>
               </p> <button className='btn btn-primary'>Add to cart</button>
             </div>
           </div>
         </div>
         <div class="col-lg-2">
           <div class="card">
           <img src={Kd4} class="card-img-top" alt="..."/>
             <div class="card-body">
              <h5 class="card-title">BYFORD</h5>
               <p class="card-text">Black Solid Casual Half Sleeves Polo  <br/>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                   <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                 </svg>1199 
               </p> <button className='btn btn-primary'>Add to cart</button>
             </div>
           </div>
         </div>
         <div class="col-lg-2">
           <div class="card">
           <img src={Kd5} class="card-img-top" alt="..."/>
             <div class="card-body">
              <h5 class="card-title">BYFORD</h5>
               <p class="card-text">Black Solid Casual Half Sleeves Polo  <br/>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                   <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                 </svg>1599 <span class="oldspa1">35% OFF</span>
               </p> <button className='btn btn-primary'>Add to cart</button>
             </div>
           </div>
         </div>
         <div class="col-lg-2">
           <div class="card">
           <img src={Kd6} class="card-img-top" alt="..."/>
             <div class="card-body">
              <h5 class="card-title">BYFORD</h5>
              <p class="card-text">Black Solid Casual Half Sleeves Polo  <br/>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                   <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                 </svg>1199 
               </p> <button className='btn btn-primary'>Add to cart</button>
             </div>
           </div>
         </div>
       </div>
      </div>
      </section>
       <section className="who">
        <div>
        <h4>Deals of the Day</h4>
      </div>
      
      <div className="container">  
      <div className="row">
        {Hproduct.map((item)=>(
        <div className="col-lg-2">
       <div className='card' key={item.id}>
            <img src={item.image} alt='' />
            <div className='card-body'>
               <h1>{item.title}</h1>
                   <p class="card-text"><h5 class="card-title"><span class="badge rounded-pill bg-primary">15% OFF</span>Bargain buy</h5></p>
                <p className="card-text">{item.ds} <br/> </p>
               <p>₹ {item.price}</p>
              <button className='btn btn-primary'>Add to cart</button>
            </div>
          </div>
         </div>
              ))}
      </div> 
      </div> 
    </section>
    <section className="new">
       <h4>New Arrivals</h4>
       <div className="container">  
        <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
          <div className="col-lg-2">
            <div className="card">
            <img src={Wo6} class="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">FOREVER GLAM</h5>
                <p className="card-text">Pink Printed Casual Cotton Women.... <br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                  </svg>299
                </p> <button className='btn btn-primary'>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card">
              <img src={Wo1} class="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">FOREVER GLAM</h5>
                <p className="card-text">Pink Printed Casual Cotton Women.... <br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                  </svg>299
                </p> <button className='btn btn-primary'>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card">
            <img src={Wo2} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">FOREVER GLAM</h5>
                <p className="card-text">Pink Printed Casual Cotton Women.... <br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                  </svg>299
                </p> <button className='btn btn-primary'>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card">
            <img src={Wo3} class="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">FOREVER GLAM</h5>
                <p className="card-text">Pink Printed Casual Cotton Women.... <br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                  </svg>299
                </p> <button className='btn btn-primary'>Add to cart</button>
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="card">
            <img src={Wo4} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">FOREVER GLAM</h5>
                <p class="card-text">Pink Printed Casual Cotton Women.... <br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                  </svg>299
                </p> <button className='btn btn-primary'>Add to cart</button>
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="card">
            <img src={Wo5} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">FOREVER GLAM</h5>
                <p class="card-text">Pink Printed Casual Cotton Women.... <br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                  </svg>299
                </p> <button className='btn btn-primary'>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
       </div>
    </section>
    <section class="old">
      <h4>Trending Now</h4>
      <div class="container">  
       <div class="row row-cols-1 row-cols-md-3 g-4 my-5">
         <div class="col-lg-2">
           <div class="card">
             <img src={Kd1} class="card-img-top" alt="..."/>
             <div class="card-body">
               <h5 class="card-title">BYFORD</h5>
               <p class="card-text">Black Solid Casual Half Sleeves Polo  <br/>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                   <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                 </svg>999
               </p> <button className='btn btn-primary'>Add to cart</button>
             </div>
           </div>
         </div>
         <div class="col-lg-2">
           <div class="card">
           <img src={Kd2} class="card-img-top" alt="..."/>
             <div class="card-body">
              <h5 class="card-title">BYFORD</h5>
               <p class="card-text">Black Solid Casual Half Sleeves Polo  <br/>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                   <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                 </svg>999 <span class="oldspa1">35% OFF</span>
               </p> <button className='btn btn-primary'>Add to cart</button>
             </div>
           </div>
         </div>
         <div class="col-lg-2">
           <div class="card">
           <img src={Kd3} class="card-img-top" alt="..."/>
             <div class="card-body">
              <h5 class="card-title">BYFORD</h5>
               <p class="card-text">Black Solid Casual Half Sleeves Polo  <br/>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                   <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                 </svg>999 <span class="oldspa1">35% OFF</span>
               </p> <button className='btn btn-primary'>Add to cart</button>
             </div>
           </div>
         </div>
         <div class="col-lg-2">
           <div class="card">
           <img src={Kd4} class="card-img-top" alt="..."/>
             <div class="card-body">
              <h5 class="card-title">BYFORD</h5>
               <p class="card-text">Black Solid Casual Half Sleeves Polo  <br/>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                   <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                 </svg>1199 
               </p> <button className='btn btn-primary'>Add to cart</button>
             </div>
           </div>
         </div>
         <div class="col-lg-2">
           <div class="card">
           <img src={Kd5} class="card-img-top" alt="..."/>
             <div class="card-body">
              <h5 class="card-title">BYFORD</h5>
               <p class="card-text">Black Solid Casual Half Sleeves Polo  <br/>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                   <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                 </svg>1599 <span class="oldspa1">35% OFF</span>
               </p> <button className='btn btn-primary'>Add to cart</button>
             </div>
           </div>
         </div>
         <div class="col-lg-2">
           <div class="card">
           <img src={Kd6} class="card-img-top" alt="..."/>
             <div class="card-body">
              <h5 class="card-title">BYFORD</h5>
              <p class="card-text">Black Solid Casual Half Sleeves Polo  <br/>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                   <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                 </svg>1199 
               </p> <button className='btn btn-primary'>Add to cart</button>
             </div>
           </div>
         </div>
       </div>
      </div>
      </section>
       <section className="who">
        <div>
        <h4>Deals of the Day</h4>
      </div>
      
      <div className="container">  
      <div className="row">
        {Hproduct.map((item)=>(
        <div className="col-lg-2">
       <div className='card' key={item.id}>
            <img src={item.image} alt='' />
            <div className='card-body'>
               <h1>{item.title}</h1>
                   <p class="card-text"><h5 class="card-title"><span class="badge rounded-pill bg-primary">15% OFF</span>Bargain buy</h5></p>
                <p className="card-text">{item.ds} <br/> </p>
               <p>₹ {item.price}</p>
              <button className='btn btn-primary'>Add to cart</button>
            </div>
          </div>
         </div>
              ))}
      </div> 
      </div> 
    </section>
    <section className="new">
       <h4>New Arrivals</h4>
       <div className="container">  
        <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
          <div className="col-lg-2">
            <div className="card">
            <img src={Wo6} class="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">FOREVER GLAM</h5>
                <p className="card-text">Pink Printed Casual Cotton Women.... <br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                  </svg>299
                </p> <button className='btn btn-primary'>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card">
              <img src={Wo1} class="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">FOREVER GLAM</h5>
                <p className="card-text">Pink Printed Casual Cotton Women.... <br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                  </svg>299
                </p> <button className='btn btn-primary'>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card">
            <img src={Wo2} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">FOREVER GLAM</h5>
                <p className="card-text">Pink Printed Casual Cotton Women.... <br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                  </svg>299
                </p> <button className='btn btn-primary'>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card">
            <img src={Wo3} class="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">FOREVER GLAM</h5>
                <p className="card-text">Pink Printed Casual Cotton Women.... <br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                  </svg>299
                </p> <button className='btn btn-primary'>Add to cart</button>
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="card">
            <img src={Wo4} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">FOREVER GLAM</h5>
                <p class="card-text">Pink Printed Casual Cotton Women.... <br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                  </svg>299
                </p> <button className='btn btn-primary'>Add to cart</button>
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="card">
            <img src={Wo5} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">FOREVER GLAM</h5>
                <p class="card-text">Pink Printed Casual Cotton Women.... <br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                  </svg>299
                </p> <button className='btn btn-primary'>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
       </div>
    </section>
    <section class="old">
      <h4>Trending Now</h4>
      <div class="container">  
       <div class="row row-cols-1 row-cols-md-3 g-4 my-5">
         <div class="col-lg-2">
           <div class="card">
             <img src={Kd1} class="card-img-top" alt="..."/>
             <div class="card-body">
               <h5 class="card-title">BYFORD</h5>
               <p class="card-text">Black Solid Casual Half Sleeves Polo  <br/>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                   <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                 </svg>999
               </p> <button className='btn btn-primary'>Add to cart</button>
             </div>
           </div>
         </div>
         <div class="col-lg-2">
           <div class="card">
           <img src={Kd2} class="card-img-top" alt="..."/>
             <div class="card-body">
              <h5 class="card-title">BYFORD</h5>
               <p class="card-text">Black Solid Casual Half Sleeves Polo  <br/>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                   <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                 </svg>999 <span class="oldspa1">35% OFF</span>
               </p> <button className='btn btn-primary'>Add to cart</button>
             </div>
           </div>
         </div>
         <div class="col-lg-2">
           <div class="card">
           <img src={Kd3} class="card-img-top" alt="..."/>
             <div class="card-body">
              <h5 class="card-title">BYFORD</h5>
               <p class="card-text">Black Solid Casual Half Sleeves Polo  <br/>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                   <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                 </svg>999 <span class="oldspa1">35% OFF</span>
               </p> <button className='btn btn-primary'>Add to cart</button>
             </div>
           </div>
         </div>
         <div class="col-lg-2">
           <div class="card">
           <img src={Kd4} class="card-img-top" alt="..."/>
             <div class="card-body">
              <h5 class="card-title">BYFORD</h5>
               <p class="card-text">Black Solid Casual Half Sleeves Polo  <br/>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                   <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                 </svg>1199 
               </p> <button className='btn btn-primary'>Add to cart</button>
             </div>
           </div>
         </div>
         <div class="col-lg-2">
           <div class="card">
           <img src={Kd5} class="card-img-top" alt="..."/>
             <div class="card-body">
              <h5 class="card-title">BYFORD</h5>
               <p class="card-text">Black Solid Casual Half Sleeves Polo  <br/>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                   <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                 </svg>1599 <span class="oldspa1">35% OFF</span>
               </p> <button className='btn btn-primary'>Add to cart</button>
             </div>
           </div>
         </div>
         <div class="col-lg-2">
           <div class="card">
           <img src={Kd6} class="card-img-top" alt="..."/>
             <div class="card-body">
              <h5 class="card-title">BYFORD</h5>
              <p class="card-text">Black Solid Casual Half Sleeves Polo  <br/>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                   <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                 </svg>1199 
               </p> <button className='btn btn-primary'>Add to cart</button>
             </div>
           </div>
         </div>
       </div>
      </div>
      </section>
       <section className="who">
        <div>
        <h4>Deals of the Day</h4>
      </div>
      
      <div className="container">  
      <div className="row">
        {Hproduct.map((item)=>(
        <div className="col-lg-2">
       <div className='card' key={item.id}>
            <img src={item.image} alt='' />
            <div className='card-body'>
               <h1>{item.title}</h1>
                   <p class="card-text"><h5 class="card-title"><span class="badge rounded-pill bg-primary">15% OFF</span>Bargain buy</h5></p>
                <p className="card-text">{item.ds} <br/> </p>
               <p>₹ {item.price}</p>
              <button className='btn btn-primary'>Add to cart</button>
            </div>
          </div>
         </div>
              ))}
      </div> 
      </div> 
    </section>
    <section className="new">
       <h4>New Arrivals</h4>
       <div className="container">  
        <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
          <div className="col-lg-2">
            <div className="card">
            <img src={Wo6} class="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">FOREVER GLAM</h5>
                <p className="card-text">Pink Printed Casual Cotton Women.... <br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                  </svg>299
                </p> <button className='btn btn-primary'>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card">
              <img src={Wo1} class="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">FOREVER GLAM</h5>
                <p className="card-text">Pink Printed Casual Cotton Women.... <br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                  </svg>299
                </p> <button className='btn btn-primary'>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card">
            <img src={Wo2} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">FOREVER GLAM</h5>
                <p className="card-text">Pink Printed Casual Cotton Women.... <br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                  </svg>299
                </p> <button className='btn btn-primary'>Add to cart</button>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="card">
            <img src={Wo3} class="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">FOREVER GLAM</h5>
                <p className="card-text">Pink Printed Casual Cotton Women.... <br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                  </svg>299
                </p> <button className='btn btn-primary'>Add to cart</button>
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="card">
            <img src={Wo4} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">FOREVER GLAM</h5>
                <p class="card-text">Pink Printed Casual Cotton Women.... <br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                  </svg>299
                </p> <button className='btn btn-primary'>Add to cart</button>
              </div>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="card">
            <img src={Wo5} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">FOREVER GLAM</h5>
                <p class="card-text">Pink Printed Casual Cotton Women.... <br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                  </svg>299
                </p> <button className='btn btn-primary'>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
       </div>
    </section>
    <section class="old">
      <h4>Trending Now</h4>
      <div class="container">  
       <div class="row row-cols-1 row-cols-md-3 g-4 my-5">
         <div class="col-lg-2">
           <div class="card">
             <img src={Kd1} class="card-img-top" alt="..."/>
             <div class="card-body">
               <h5 class="card-title">BYFORD</h5>
               <p class="card-text">Black Solid Casual Half Sleeves Polo  <br/>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                   <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                 </svg>999
               </p> <button className='btn btn-primary'>Add to cart</button>
             </div>
           </div>
         </div>
         <div class="col-lg-2">
           <div class="card">
           <img src={Kd2} class="card-img-top" alt="..."/>
             <div class="card-body">
              <h5 class="card-title">BYFORD</h5>
               <p class="card-text">Black Solid Casual Half Sleeves Polo  <br/>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                   <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                 </svg>999 <span class="oldspa1">35% OFF</span>
               </p> <button className='btn btn-primary'>Add to cart</button>
             </div>
           </div>
         </div>
         <div class="col-lg-2">
           <div class="card">
           <img src={Kd3} class="card-img-top" alt="..."/>
             <div class="card-body">
              <h5 class="card-title">BYFORD</h5>
               <p class="card-text">Black Solid Casual Half Sleeves Polo  <br/>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                   <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                 </svg>999 <span class="oldspa1">35% OFF</span>
               </p> <button className='btn btn-primary'>Add to cart</button>
             </div>
           </div>
         </div>
         <div class="col-lg-2">
           <div class="card">
           <img src={Kd4} class="card-img-top" alt="..."/>
             <div class="card-body">
              <h5 class="card-title">BYFORD</h5>
               <p class="card-text">Black Solid Casual Half Sleeves Polo  <br/>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                   <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                 </svg>1199 
               </p> <button className='btn btn-primary'>Add to cart</button>
             </div>
           </div>
         </div>
         <div class="col-lg-2">
           <div class="card">
           <img src={Kd5} class="card-img-top" alt="..."/>
             <div class="card-body">
              <h5 class="card-title">BYFORD</h5>
               <p class="card-text">Black Solid Casual Half Sleeves Polo  <br/>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                   <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                 </svg>1599 <span class="oldspa1">35% OFF</span>
               </p> <button className='btn btn-primary'>Add to cart</button>
             </div>
           </div>
         </div>
         <div class="col-lg-2">
           <div class="card">
           <img src={Kd6} class="card-img-top" alt="..."/>
             <div class="card-body">
              <h5 class="card-title">BYFORD</h5>
              <p class="card-text">Black Solid Casual Half Sleeves Polo  <br/>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                   <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                 </svg>1199 
               </p> <button className='btn btn-primary'>Add to cart</button>
             </div>
           </div>
         </div>
       </div>
      </div>
   </section>
    </div>
  )
}

export default Home
