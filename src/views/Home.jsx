import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react'
import StudentCard from '../component/StudentCard';
import axios from 'axios';
import AddUser from '../assets/add-user.png';





function Home() {
    const[student,setStudent]=useState([
        {
            id: "1",
            name: "Pratik",
            city: "Nagar"
        },
        {
             id: "2",
            name: "Krushna",
            city: "Nagar"
        }
    ])

    const loadStudent=async()=>{
        const response= await axios.get("https://backend-e9jw.onrender.com/students");
        setStudent(response.data.data);
    }
    useEffect(()=>{
        loadStudent();
    },[])

  return (
    <div>
        <h1 className="text-center text-4xl font-bold font-serif">All Studnets</h1>

        <div>{student.map((studObj,i)=>{
            const {id,name,city}=studObj;
            return(
                <StudentCard key={i} id={id} name={name} city={city} loadStudent={loadStudent} />
            )
             
        })}</div>
        <Link to="/Addd">
         <img src={AddUser} alt="Add user png image" className="h-[50px] fixed bottom-5 right-5"/>
         </Link>
    </div>

    
  )

}

export default Home