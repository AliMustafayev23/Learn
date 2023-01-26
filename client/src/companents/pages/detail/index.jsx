import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from 'react-router-dom';
import "./index.scss"
const Detail = (props) => {
    const[teacher,setTeacher]=useState([])
    const{_id}=useParams()
    const navigate=useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:8000/user/${_id}`).then((response) => {
          setTeacher(response.data);
        });
      }, []);
      const delet=()=>{
        axios.delete(`http://localhost:8000/user/${_id}`)
        navigate("/")
      }
   
        props.setHeader(true)
   
      
  return (
    <div className='detail'>
         <Helmet>
                <meta charSet="utf-8" />
                <title>{teacher.name}</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <img src={teacher.image} alt="" />
      <div className="detailleft">
        <h1>{teacher.name}</h1>
        <i>{teacher.job}</i>
        <p>{teacher.description}</p>
        <button className='delet' onClick={()=>delet()}>Delete</button>
      </div>
    </div>
  )
}

export default Detail
