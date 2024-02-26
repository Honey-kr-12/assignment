import React from 'react'
import Cards from './Cards'
import Footer from './Footer'
import './footer.scss'

const FooterContainer = () => {
  return (
    <div>
      <div className='r1' >
        <p className='dealSec' >Related deals you may like for</p>
      </div>
      <div className='cards' >
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div className='signup'>
        <p className='sDetail'>Sign up and get exclusive special deals</p>
        <div className='login'>
        <input className='input' type="text" />
        <button className='signupBtn' >Sign Up</button>
      </div>
        </div>
      <Footer/>
    </div>
  )
}

export default FooterContainer
