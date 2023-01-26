import React from 'react'
import "./index.scss"
const LearnFrom = () => {
  return (
    
   <div  className='learnfrom'>
     
     <div className="learnfrombody">
         <div className="learnfromleft">
             <h1>Learn From The Expert</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime<br/>
             ipsa nulla sed quis rerum amet natus quas necessitatibus.
             </p>
             <button className='addmissionnow'>Admission now</button>
         </div>
         <div className="learnfromright">
             <h1>Sign up</h1>
             <input type="text" placeholder='Email Address'/>
             <input type="text" placeholder='Password'/>
             <input type="text" placeholder='Re-type Password'/>
             <button className='signup'>Sign Up</button>
         </div>
     </div>
     
     

 </div>
   
 
  )
}

export default LearnFrom
