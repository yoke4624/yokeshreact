import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
      <div>
          <section className='ys'>
              <div className='container qaw '>
                  <div className='row'>
                      <div className='col-lg-8'>
        <div className="card text-center">
  <div className="card-header">
   <p>Pantaloons Sale is here! Get Upto 60% Off + Extra <br/> Rs.1500 Off* on order value of Rs.5999, Code: SALE1500</p>
  </div>
  <div class="card-body">
                  <h5 class="card-title">LOGIN/REGISTER</h5>
                                  <label>EMAIL ADDRESS</label> <br/>
                                  <input type='email' placeholder='enter email' /><br />
                                  <label>PASSWORD</label><br/>
                                  <input type='password' placeholder='enter password'/><br/><br/>
    <a href="#" class="btn btn-primary">SUBMIT</a>
  </div>
  <div class="card-footer text-muted">
   <Link to='/register'> REGISTER</Link>
                          </div>
                          </div>
                          </div>
              </div>
              </div>
              </section>
    </div>
  )
}

export default Login