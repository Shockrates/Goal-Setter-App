import React from 'react'
import {useState, useEffect} from 'react';
import {FaUser} from 'react-icons/fa';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email:'',
    password: '',
    passwordConf: '' 
  })

  const {name, email, password, passwordConf} = formData;
const onChange = (e) => {
  setFormData((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }))
}

const onSubmit = (e) => {
  e.preventDefault();
}

  return (
    <>
    <section className='heading'>
      <h1>
        <FaUser /> Register
      </h1>
      <p> Create an Account</p>
    </section>

    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className="form-group">
        <input 
          type="text" 
          className='form-control' 
          name="name" 
          id="name" 
          value={name} 
          placeholder ='Enter your name'
          onChange={onChange}
        />
        </div>
        <div className="form-group">
        <input 
          type="email" 
          className='form-control' 
          name="email" 
          id="email" 
          value={email} 
          placeholder ='Enter your email'
          onChange={onChange}
        />
        </div>
        <div className="form-group">
          <input 
            type="password" 
            className='form-control' 
            name="password" 
            id="password" 
            value={password} 
            placeholder ='Enter your password'
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input 
            type="password" 
            className='form-control' 
            name="passwordConf" 
            id="passwordConf" 
            value={passwordConf} 
            placeholder ='Confirm Password'
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <button type="submit" className='btn btn-block'>
            Register
          </button>
        </div>
        
      </form>
    </section>
    </>
  )
}

export default Register