import React from "react";
import './App.css';
import { useContext } from "react";
import Storedata from "./store";
import { Link, useNavigate } from "react-router-dom";
const Student =()=>{
    const studentdata=useContext(Storedata)
    const Navi=useNavigate()
    console.log(studentdata);
    return(
        <div>
            <div className="nav">
            <h1>Student Details</h1>
            <button onClick={()=>Navi('/newstudent')}>Add New Student</button>
            </div>
            
            <table>
                <thead>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </thead>
                    <tbody>
                        {studentdata.stuname.map((item, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{item.Name}</td>
                                    <td>{item.Age}</td>
                                    <td>{item.Course}</td>
                                    <td>{item.Batch}</td>
                                    <td><Link to='/editstudent' state={{data:index}} >Edit</Link></td>

                                </tr>
                            )
                        })}
                    </tbody>
            </table>
        </div>
       
     
    )
}
export default Student;