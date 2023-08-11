import React, { useContext } from 'react'
import Storedata from './store'
import { useNavigate } from 'react-router-dom'
import './App.css';

const Addnewstudent = () => {
    const showdat=useContext(Storedata)
    const Navi=useNavigate()
    const newstu={
        name:"",
        age:"",
        course:"",
        batch:""
    }
    const handlechange=(e)=>{
        newstu[e.target.name]=e.target.value;
    }
    const handlclick=()=>{
         showdat.stuname.push(newstu);
         Navi('/student')
    }
    const gotostudent=()=>{
      Navi('/student')
    }
    
  return (
    <div>
      <h1>New Student</h1>
        <form>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' placeholder='Name' name="Name" onChange={handlechange}/>
        
        <label htmlFor='age'>Age:</label>
        <input type='text' id='age' placeholder='Age' name="Age" onChange={handlechange}/> <br/>
        
        <label htmlFor='course'>Course:</label>
        <input type='text' id='course' placeholder='Course' name="Course" onChange={handlechange}/>
        
        <label htmlFor='batch'>Batch:</label>
        <input type='text' id='batch' placeholder='Batch' name='Batch' onChange={handlechange}/> <br/>
        <button onClick={gotostudent}>Cancel</button>
        <button type='button'onClick={handlclick}>Add new Student</button>
        
        </form>
    </div>
  )
}

export default Addnewstudent
 