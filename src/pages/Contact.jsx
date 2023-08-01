import React from 'react';
import '../styles/Contact.css';
import ContactImage from "../assets/fooda.jpeg";

const Contact = () =>{
  return(
 <div className="contact" >

<div className="leftSide" style={{ backgroundImage: `URL(${ContactImage})` }}>

</div>

<div className="rightSide">
<h1>Contact Us</h1>
<form id="contact-form" method="POST">
<label htmlFor='name'>Full Name</label>
<input name="name" type="text" placeholder="enter your Name" />
<label htmlFor='email'>Email</label>
<input name="email" type="email" placeholder="enter your email" />
<label htmlFor='message'>Message</label>
<textarea name="message" placeholder='Enter your Message' row="7">
</textarea>
<button type='submit'>Send Message</button>
</form>
</div>

 </div>
  )
}

export default Contact;