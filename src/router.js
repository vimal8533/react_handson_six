import React, { useState } from "react";
import { BrowserRouter,  Route, Routes,Link } from "react-router-dom";
import Home from "./home";
import Student from "./student";
import Contact from "./contact";
import Storedata from "./store";
import Addnewstudent from "./Addnewstudent";



const Routers =()=>{
    const [studentdata,setstudentdata]=useState([
        {Name:"Vimal",Age:24,Course:"Mern",Batch:"oct",Change:"edit"},
        {Name:"Dabloo",Age:25,Course:"js",Batch:"dec",Change:"edit"},
        {Name:"Saw",Age:22,Course:"Tech",Batch:"jan",Change:"edit"},
        {Name:"Kisku",Age:26,Course:"MBA",Batch:"Feb",Change:"edit"},
        {Name:"Prince",Age:24,Course:"Geegster",Batch:"june",Change:"edit"},
        {Name:"Ishu",Age:12,Course:"Java",Batch:"March",Change:"edit"},
    ])
return(
<BrowserRouter>
<div className="Links">
<Link to='/' className="lin" >Home</Link>
                  <Link to='/student' className="lin">Student</Link>
                  <Link to='/contact' className="lin">Contact</Link>
</div>
                    
<Routes>
    <Route path='/' element ={<Home/>} />
    <Route path='/student' element ={
        <Storedata.Provider value={{stuname:studentdata, updateStu :setstudentdata}}>
            <Student/>
        </Storedata.Provider>
    } />
    <Route path='/newstudent' element ={<Storedata.Provider value={{stuname:studentdata, updateStu :setstudentdata}}>
            <Addnewstudent/>
        </Storedata.Provider>} />
    <Route path='/contact' element ={<Contact/>} />
</Routes>
</BrowserRouter>


)

}

export default Routers