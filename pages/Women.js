import React from 'react'
import './Women.css'
import Zr1 from '../image/Z8.jpg'
import Zr2 from '../image/Z9.jpg'
import Zr3 from '../image/Z10.jpg'
// import Zr8 from '../image/Z15.jfif'
// import Zr9 from '../image/Z16.jfif'
import Zr10 from '../image/Z21.jfif'
import Zr11 from '../image/Z22.jfif'
import Zr12 from '../image/Z23.jfif'
import Zr13 from '../image/Z24.jfif'
// import Zr14 from '../image/Z25.jfif'
// import Zr15 from '../image/Z26.jfif'
import Zr16 from '../image/Z31.webp'
import Zr17 from '../image/Z32.jpg'
import Zr18 from '../image/Z33.jpeg'
import Zr19 from '../image/Z34.avif'
import Zr20 from '../image/Z41.gif'
import Zr21 from '../image/Z42.png'
import Zr22 from '../image/Z43.png'
import Zr23 from '../image/Z44.png'
import Zr24 from '../image/Z45.png'
import Wproduct from '../product/Wproduct'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../store/cartslice/Cartslice'

const Women = () =>{
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
            <img  src={Zr1} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
          <img  src={Zr2} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
          <img  src={Zr3} class="d-block w-100" alt="..."/>
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
       {Wproduct.map((item)=>(
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
       {Wproduct.map((item)=>(
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
       {Wproduct.map((item)=>(
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
       {Wproduct.map((item)=>(
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
       {Wproduct.map((item)=>(
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
       {Wproduct.map((item)=>(
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
       {Wproduct.map((item)=>(
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
       {Wproduct.map((item)=>(
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
       {Wproduct.map((item)=>(
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
            <img src={Zr10} alt='' />
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
            <img src={Zr11} alt='' />
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
            <img src={Zr12} alt='' />
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
            <img src={Zr13} alt='' />
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
              <li> <img  src={Zr16}  alt="..."/></li>
              <li> <img  src={Zr17}  alt="..."/></li>
              <li> <img  src={Zr18}  alt="..."/></li>
              <li> <img  src={Zr19}  alt="..."/></li>
          </ul>
      </div>
              </section>
     <section class="round">
     <div class="container">
        <h4>Brands to explore</h4>
<ul>
    <li><img  src={Zr20}  alt="..."/></li>
    <li><img  src={Zr21}  alt="..."/></li>
    <li><img  src={Zr22}  alt="..."/></li>
    <li><img  src={Zr23}  alt="..."/></li>
    <li><img  src={Zr24}  alt="..."/></li>
</ul>
     </div>
    </section>
    </div>
  )
}

export default Women