import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function Edit() {
  const[student,setStudent]=useState({
        id:"",
        name:"",
        city:""
    });
    const {userId}=useParams()

    const loadStudent=async()=>{
      console.log(`Loading Student With ID ${userId}`);
    };
    useEffect(()=>{
        if(userId){
            loadStudent();
        }
    })
       //Use try and catch block for the following code try yourself
  const EditStudent = async () => {
  try {
    const response = await axios.post("https://backend-e9jw.onrender.com/students", {
      id: student.id,
      name: student.name,
      city: student.city,
    });

    if (response.data.success) {
      setStudent({
        id: "",
        name: "",
        city: "",
      });
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    console.log(error); // 👈 simple print error object
    toast.error("Something went wrong!");
  }
};


  return (
    <div>
    <div className="text-center font-serif font-semibold text-2xl ">Edit Students({userId})</div>
    <div className="bg-gray-300 py-2">

        <input type="text"
         placeholder='Enter ID' 
         className="block m-auto mt-2 rounded-lg p-1"
         value={student.id}
        onChange={(e) => setStudent({ ...student, id: e.target.value })}
        />


         <input type="text" 
         placeholder='Enter Name'
          className="block m-auto mt-2 rounded-lg p-1"
          value={student.name}
           onChange={(e) => setStudent({ ...student, name: e.target.value })}
          
          />

          <input type="text" placeholder='City'
           className="block m-auto mt-2 rounded-lg p-1"
           value={student.city}
            onChange={(e) => setStudent({ ...student, city: e.target.value })}
           />
          <button
           className="text-center bg-blue-500 p-2 rounded-lg text-white 
          font-serif font-semibold block m-auto mt-2" onClick={EditStudent}>
            Edit Student</button>

    </div>
    </div>
  )
}

export default Edit