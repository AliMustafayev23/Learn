import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./index.scss"
const OurTeachers = () => {
    const[teacher,setTeacher]=useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/user").then((response) => {
          setTeacher(response.data);
        });
      }, []);
      console.log(teacher)
      const search=(value)=>{
        axios.get("http://localhost:8000/user").then((response) => {
            let searched=response.data.filter((e)=>e.name.toLowerCase().includes(value.toLowerCase()));
            setTeacher(searched);
          });
      }
      const sort=()=>{
        axios.get("http://localhost:8000/user").then((response) => {
            let sorted=response.data.sort((a,b)=>a.name>b.name?1:-1);
            setTeacher(sorted);
          });
      }
      const normal=()=>{
        axios.get("http://localhost:8000/user").then((response) => {
          setTeacher(response.data);
        });
      }
  return (
    <div className="container">
   <div className='ourteachers'>
      <h1>Our Teachers</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut<br/> neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta <br/>repudiandae in quas quibusdam ullam, i</p>
   <div className="buttons">
    <button onClick={()=>sort()} className="sort">sort</button>
    <button onClick={()=>normal()} className="sort">Normal</button>
    <div className="search">
        <input type="text" onChange={(e)=>search(e.target.value)} />
        <i class="fa-solid fa-magnifying-glass"></i>
    </div>
   </div>
    <div className="teachers">
        {teacher.map((e)=>{return(<Link to={`${e._id}`} className='teacher'>
<img src={e.image} alt="" />
<h2>{e.name}</h2>
<i>{e.job}</i>
<p>{e.description}</p>
        </Link>)})}
    </div>
    </div>
    </div>
 
  )
}

export default OurTeachers
