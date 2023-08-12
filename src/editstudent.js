import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Storedata from './store';

const Editstudent = () => {
  const contextdata=useContext(Storedata);
  console.log(contextdata);
  const Navi=useNavigate()
  const Indexvale=useLocation().state.data;
  console.log(Indexvale);
  const updateobj={
    Name:contextdata.stuname[Indexvale].Name,
    Age:contextdata.stuname[Indexvale].Age,
    Course:contextdata.stuname[Indexvale].Course,
    Batch:contextdata.stuname[Indexvale].Batch
  }
  const handlechange=(event)=>{
    updateobj[event.target.name]=event.target.value

  }
  const handlclick=()=>{
    contextdata.stuname[Indexvale]=updateobj;
    Navi('/student')
  }
  const gotostudent=()=>{
    Navi('/student')
  }
  return (
    <div>
      <h1>Edit Student</h1>
      <form>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' placeholder={contextdata.stuname[Indexvale].Name}  name="Name" onChange={handlechange}/>
        
        <label htmlFor='age'>Age:</label>
        <input type='text' id='age' placeholder={contextdata.stuname[Indexvale].Age} name="Age" onChange={handlechange}/> <br/>
        
        <label htmlFor='course'>Course:</label>
        <input type='text' id='course' placeholder={contextdata.stuname[Indexvale].Course} name="Course" onChange={handlechange}/>
        
        <label htmlFor='batch'>Batch:</label>
        <input type='text' id='batch' placeholder={contextdata.stuname[Indexvale].Batch} name='Batch' onChange={handlechange}/> <br/>
        <button onClick={gotostudent}>Cancel</button>
        <button type='button'onClick={handlclick}>Update Student</button>
        
        </form>
    </div>
  )
}

export default Editstudent
