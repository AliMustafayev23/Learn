import React from 'react'
import "./index.scss"
const MessageUs = () => {
  return (
    <div className='container'> 
    <form className='message'>
    <div className="messageus">
        <h1>Message Us</h1>
        <p>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia<br/> quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
      <div className="name">
        <input type="text" placeholder='First Name'/>
        <input type="text" placeholder='Last Name'/>
      </div>
      <input type="text" placeholder='Subject'/>
      <input type="text" placeholder='Email'/>
      <input type="text" placeholder='Write Message here.'/>
      <button className='send'>Send Message</button>
      </div>
    </form>
     
    </div>
  )
}

export default MessageUs
