import React from 'react'
 import bb1 from '../image/B1.jpg'
import bb2 from '../image/B2.webp'
import bb3 from '../image/B3.webp'
// import bb8 from '../image/B8.avif'
// import bb9 from '../image/B9.jpg'
import bb10 from '../image/B10.jfif'
import bb11 from '../image/B11.jfif'
import bb12 from '../image/B12.jpg'
import bb13 from '../image/B13.jpg'
// import bb14 from '../image/B14.jpg'
// import bb15 from '../image/B15.jpg'
import bb16 from '../image/B16.jpeg'
import bb17 from '../image/B17.webp'
import bb18 from '../image/B18.jpeg'
import bb19 from '../image/B19.jpeg'
import aa20 from '../image/A20.gif'
import aa21 from '../image/A21.png'
import aa22 from '../image/A22.png'
import aa23 from '../image/A23.png'
import aa24 from '../image/A24.png'
import kproduct from '../product/Kproduct'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../store/cartslice/Cartslice'


const Kids = () => {
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
          <img  src={bb1} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
          <img  src={bb2} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
          <img  src={bb3} class="d-block w-100" alt="..."/>
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
       {kproduct.map((item)=>(
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
       {kproduct.map((item)=>(
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
       {kproduct.map((item)=>(
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
       {kproduct.map((item)=>(
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
       {kproduct.map((item)=>(
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
       {kproduct.map((item)=>(
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
       {kproduct.map((item)=>(
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
       {kproduct.map((item)=>(
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
       {kproduct.map((item)=>(
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
            <img src={bb10} alt='' />
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
            <img src={bb11} alt='' />
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
            <img src={bb12} alt='' />
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
            <img src={bb13} alt='' />
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
                  <li><img  src={bb16}  alt="..."/></li>
                  <li><img  src={bb17}  alt="..."/></li>
                  <li><img  src={bb18}  alt="..."/></li>
                  <li><img  src={bb19}  alt="..."/></li>
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

export default Kids
