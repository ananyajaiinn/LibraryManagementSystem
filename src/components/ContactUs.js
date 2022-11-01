import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
    <>
    <section className='contact'>
    <div className='content'>
      <h2>Contact Us</h2>
      <p>You can contact us on the details mentioned below and get yourself registered with our library.</p>
    </div>
    <div className="contain">
      <div className='contactInfo'>
      <div className='box'>
        <div className='icon'></div>
        <div className='text'>
          <h3>Address</h3>
          <p>Chitkara University <br></br>Chandigarh-Patiala National Highway<br></br> (NH- 64 Village Jansla, Rajpura,<br></br> Punjab 140401</p>
        </div>
      </div>

      <div className='box'>
        <div className='icon'></div>
        <div className='text'>
          <h3>Phone</h3>
          <p>+91-1234567891</p>
        </div>
      </div>


      <div className='box'>
        <div className='icon'></div>
        <div className='text'>
          <h3>Email</h3>
          <p>library@gmail.com</p>
        </div>
      </div>

      </div>
      <div className='map'>
      <iframe width="500" height="370" id="gmap_canvas" src="https://maps.google.com/maps?q=chitkara%20university&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div>
    </div>
    </section>
    
    </>
  )
}

export default ContactUs