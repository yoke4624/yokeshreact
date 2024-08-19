import React from 'react'
import './Register.css'

const Register = () => {
  return (
      <div>
          <section className='otp'>
          <div className='container'>
              <div className='row'>
                      <div className='col-lg-8'>
                           <div className="card text-center">
                          <form>
                              <br/>
            <label>NAME      :      </label><br/><br/><br/>
            <input type="text" placeholder="enter your name"/><br/>
            <br/>
            
            <br/>
            <label>AGE      :       </label><br/><br/><br/>
            <input type="number" placeholder="enter your age"/><br/>
            <br/>
            
            <br/>
            <label>EMAIL         :     </label><br/><br/><br/>
            <input type="email" placeholder="example123@gmail.com"/><br/>
            <br/>
          
            <br/>
            <label>PASSWORD     :      </label><br/><br/><br/>
            <input type="password" placeholder="enter your password"/><br/>
            <br/>
           
            <br/>
            <label>GENDER        :       </label><br/><br/>
            <label>male      :        </label>
            <input type="radio"  value="male"  name="male"/>
            <label>female       :       </label>
            <input type="radio" value="male" name="male"/><br/>
            <br/>
            
              <br /><br />
                              </form>
                             <button className='btn btn-primary'>SUBMIT</button>
                          </div>
                          </div>
              </div>
              </div>
              </section>
    </div>
  )
}

export default Register