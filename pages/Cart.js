import React from 'react'
import { Link } from 'react-router-dom'
import aa8 from '../image/A8.jpeg'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart, updateQuantity } from '../store/cartslice/Cartslice'


const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
  };
  const incrementCart = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: quantity + 1 }))
  };
  const decrementCart = (id, quantity) => {
    if (quantity > 1) {
      dispatch(updateQuantity({id,quantity:quantity-1}))
    }
  }
  return (
      <div>
          <section className='jon'>
              <ul>
                  <li ><Link className='mr' to='/'>HOME /</Link></li>
                  <li><Link className='mr' to='/cart' >MY CART</Link></li>
              </ul>
              <div className='container'>
          <h1>MY CART</h1>
          {cartProducts.map((item) => (
            <div class="card mb-3" key={item.id}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={item.image} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{ item.title}</h5>
                    <p class="card-text"> {item.ds}</p>
                    <button className='btn btn-primary ml-5'><button className='btn btn-warning ye' onClick={() => { decrementCart(item.id, item.quantity) }}>-</button>{ item.quantity}<button className='btn btn-warning ye' onClick={()=>{incrementCart(item.id,item.quantity)}}>+</button></button>
                    <button className='btn btn-warning' onClick={() => { deleteCart(item) }}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
</div>
          </section>
    </div>
  )
}

export default Cart