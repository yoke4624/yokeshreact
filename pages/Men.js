import React from 'react'
import aa1 from '../image/A1.jpg'
import aa2 from '../image/A2.jpg'
import aa3 from '../image/A3.jpg'
// import aa8 from '../image/A8.jpeg'
// import aa9 from '../image/A9.jpeg'
import aa10 from '../image/A10.jfif'
import aa11 from '../image/A11.jfif'
import aa12 from '../image/A12.jfif'
import aa13 from '../image/A13.jfif'
// import aa14 from '../image/A14.jfif'
// import aa15 from '../image/A15.jfif'
import aa16 from '../image/A16.jpeg'
import aa17 from '../image/A17.png'
import aa18 from '../image/A18.jpeg'
import aa19 from '../image/A19.jpg'
import aa20 from '../image/A20.gif'
import aa21 from '../image/A21.png'
import aa22 from '../image/A22.png'
import aa23 from '../image/A23.png'
import aa24 from '../image/A24.png'
import Mproduct from '../product/Mproduct'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../store/cartslice/Cartslice'

const Men = () => {
  const cartProducts = useSelector((state)=>state.cart.cartItems)
  const dispatch = useDispatch();
  const addCart =(item) =>{
    dispatch(addToCart(item));
    
  };
  const deleteCart = (item) =>{
    dispatch(deleteFromCart(item));
  }
  return (
    <div>
 <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
          <img  src={aa1} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
          <img  src={aa2} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
          <img  src={aa3} class="d-block w-100" alt="..."/>
          </div>
          
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <section class="who">
             <h4>Deals of the Day</h4>
        <div class="container"> 
        <div class="row">
        {Mproduct.map((item)=>(
        <div class="col-lg-3">
       <div className='card' key={item.id}>
            <img src={item.image} alt='' />
            <div className='card-body'>
               <h1>{item.title}</h1>
                   <p class="card-text"><h5 class="card-title"><span class="badge rounded-pill bg-primary">15% OFF</span>Bargain buy</h5></p>
                <p class="card-text">{item.ds} <br/> </p>
               <p>₹ {item.price}</p>
               {cartProducts.find(items => items.id === item.id) ?
                 <button className='btn btn-primary' onClick={() => deleteCart(item)}>remove from cart</button>:
                  <button className='btn btn-primary' onClick={()=>addCart(item)}>Add to cart</button>
               }
            </div>
          </div>
         </div>
              ))}
</div>
</div>
      </section>
      <section class="who">
             <h4>Deals of the Day</h4>
        <div class="container"> 
        <div class="row">
        {Mproduct.map((item)=>(
        <div class="col-lg-3">
       <div className='card' key={item.id}>
            <img src={item.image} alt='' />
            <div className='card-body'>
               <h1>{item.title}</h1>
                   <p class="card-text"><h5 class="card-title"><span class="badge rounded-pill bg-primary">15% OFF</span>Bargain buy</h5></p>
                <p class="card-text">{item.ds} <br/> </p>
               <p>₹ {item.price}</p>
               <button className='btn btn-primary'>Add to cart</button>
            </div>
          </div>
         </div>
              ))}
</div>
</div>
      </section>
      <section class="who">
             <h4>Deals of the Day</h4>
        <div class="container"> 
        <div class="row">
        {Mproduct.map((item)=>(
        <div class="col-lg-3">
       <div className='card' key={item.id}>
            <img src={item.image} alt='' />
            <div className='card-body'>
               <h1>{item.title}</h1>
                   <p class="card-text"><h5 class="card-title"><span class="badge rounded-pill bg-primary">15% OFF</span>Bargain buy</h5></p>
                <p class="card-text">{item.ds} <br/> </p>
               <p>₹ {item.price}</p>
               <button className='btn btn-primary'>Add to cart</button>
            </div>
          </div>
         </div>
              ))}
</div>
</div>
      </section>
      <section class="who">
             <h4>Deals of the Day</h4>
        <div class="container"> 
        <div class="row">
        {Mproduct.map((item)=>(
        <div class="col-lg-3">
       <div className='card' key={item.id}>
            <img src={item.image} alt='' />
            <div className='card-body'>
               <h1>{item.title}</h1>
                   <p class="card-text"><h5 class="card-title"><span class="badge rounded-pill bg-primary">15% OFF</span>Bargain buy</h5></p>
                <p class="card-text">{item.ds} <br/> </p>
               <p>₹ {item.price}</p>
               <button className='btn btn-primary'>Add to cart</button>
            </div>
          </div>
         </div>
              ))}
</div>
</div>
      </section>
      <section class="who">
             <h4>Deals of the Day</h4>
        <div class="container"> 
        <div class="row">
        {Mproduct.map((item)=>(
        <div class="col-lg-3">
       <div className='card' key={item.id}>
            <img src={item.image} alt='' />
            <div className='card-body'>
               <h1>{item.title}</h1>
                   <p class="card-text"><h5 class="card-title"><span class="badge rounded-pill bg-primary">15% OFF</span>Bargain buy</h5></p>
                <p class="card-text">{item.ds} <br/> </p>
               <p>₹ {item.price}</p>
               <button className='btn btn-primary'>Add to cart</button>
            </div>
          </div>
         </div>
              ))}
</div>
</div>
      </section>
      <section class="who">
             <h4>Deals of the Day</h4>
        <div class="container"> 
        <div class="row">
        {Mproduct.map((item)=>(
        <div class="col-lg-3">
       <div className='card' key={item.id}>
            <img src={item.image} alt='' />
            <div className='card-body'>
               <h1>{item.title}</h1>
                   <p class="card-text"><h5 class="card-title"><span class="badge rounded-pill bg-primary">15% OFF</span>Bargain buy</h5></p>
                <p class="card-text">{item.ds} <br/> </p>
               <p>₹ {item.price}</p>
               <button className='btn btn-primary'>Add to cart</button>
            </div>
          </div>
         </div>
              ))}
</div>
</div>
      </section>
      <section class="who">
             <h4>Deals of the Day</h4>
        <div class="container"> 
        <div class="row">
        {Mproduct.map((item)=>(
        <div class="col-lg-3">
       <div className='card' key={item.id}>
            <img src={item.image} alt='' />
            <div className='card-body'>
               <h1>{item.title}</h1>
                   <p class="card-text"><h5 class="card-title"><span class="badge rounded-pill bg-primary">15% OFF</span>Bargain buy</h5></p>
                <p class="card-text">{item.ds} <br/> </p>
               <p>₹ {item.price}</p>
               <button className='btn btn-primary'>Add to cart</button>
            </div>
          </div>
         </div>
              ))}
</div>
</div>
      </section>
      <section class="who">
             <h4>Deals of the Day</h4>
        <div class="container"> 
        <div class="row">
        {Mproduct.map((item)=>(
        <div class="col-lg-3">
       <div className='card' key={item.id}>
            <img src={item.image} alt='' />
            <div className='card-body'>
               <h1>{item.title}</h1>
                   <p class="card-text"><h5 class="card-title"><span class="badge rounded-pill bg-primary">15% OFF</span>Bargain buy</h5></p>
                <p class="card-text">{item.ds} <br/> </p>
               <p>₹ {item.price}</p>
               <button className='btn btn-primary'>Add to cart</button>
            </div>
          </div>
         </div>
              ))}
</div>
</div>
      </section>
      <section class="who">
             <h4>Deals of the Day</h4>
        <div class="container"> 
        <div class="row">
        {Mproduct.map((item)=>(
        <div class="col-lg-3">
       <div className='card' key={item.id}>
            <img src={item.image} alt='' />
            <div className='card-body'>
               <h1>{item.title}</h1>
                   <p class="card-text"><h5 class="card-title"><span class="badge rounded-pill bg-primary">15% OFF</span>Bargain buy</h5></p>
                <p class="card-text">{item.ds} <br/> </p>
               <p>₹ {item.price}</p>
               <button className='btn btn-primary'>Add to cart</button>
            </div>
          </div>
         </div>
              ))}
</div>
</div>
      </section>
        <section className='old'>
        <h4>Styles Recommended for You</h4>
        <div class="container"> 
        <div class="row">
       
        <div class="col-lg-3">
       <div className='card'>
            <img src={aa10} alt='' />
            <div className='card-body'>
                  <h1>BYFORD</h1>
                   <p class="card-text">Black Solid Casual Half Sleeves Polo </p>
                  <p>₹ 500</p>
              <button className='btn btn-primary'>Add to cart</button>
            </div>
          </div>
              </div>
       <div class="col-lg-3">
       <div className='card'>
            <img src={aa11} alt='' />
            <div className='card-body'>
                  <h1>BYFORD</h1>
                   <p class="card-text">Black Solid Casual Half Sleeves Polo </p>
                  <p>₹ 500</p>
               <button className='btn btn-primary'>Add to cart</button>
            </div>
          </div>
              </div>
 <div class="col-lg-3">
       <div className='card'>
            <img src={aa12} alt='' />
            <div className='card-body'>
                  <h1>BYFORD</h1>
                   <p class="card-text">Black Solid Casual Half Sleeves Polo </p>
                  <p>₹ 500</p>
              <button className='btn btn-primary'>Add to cart</button>
            </div>
          </div>
              </div>
  <div class="col-lg-3">
       <div className='card'>
            <img src={aa13} alt='' />
            <div className='card-body'>
                  <h1>BYFORD</h1>
                   <p class="card-text">Black Solid Casual Half Sleeves Polo </p>
                  <p>₹ 500</p>
               <button className='btn btn-primary'>Add to cart</button>
            </div>
          </div>
              </div>
</div>
</div>
      </section>
        <section class="bol">
          <div class="container">
              <h4>Shop By Occasion</h4>
              <ul class="maxc">
                  <li><img  src={aa16}  alt="..."/></li>
                  <li><img  src={aa17}  alt="..."/></li>
                  <li><img  src={aa18}  alt="..."/></li>
                  <li><img  src={aa19}  alt="..."/></li>
              </ul>
          </div>
                  </section>
     <section class="round">
     <div class="container">
        <h4>Brands to explore</h4>
<ul>
    <li><img  src={aa20}  alt="..."/></li>
    <li><img  src={aa21}  alt="..."/></li>
    <li><img  src={aa22}  alt="..."/></li>
    <li><img  src={aa23}  alt="..."/></li>
    <li><img  src={aa24}  alt="..."/></li>
</ul>
     </div>
    </section>
    </div>
  )
}

export default Men