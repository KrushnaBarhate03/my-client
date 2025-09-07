import React from 'react'
import axios from 'axios'
import Delete from '../assets/delete.png'
import Edit from '../assets/edit.png'
import toast,{Toaster} from'react-hot-toast'
import{Link} from 'react-router-dom'
function StudentCard({id,name,city, laodStudent}) {

  const deleteStudent=async(id)=>{
    const response=await axios.delete(`https://backend-e9jw.onrender.com/studentsd/${id}`);
    if(response.data.success){
      // window.location.reload();
      laodStudent();
      toast.success(response.data.message)
    }
    else{
       toast.error(response.data.message)
    }

  }
  return (
    <div className="border-2 border-red-600 p-4 m-4 rounded-lg relative">
        <h2 className="text-2xl font-serif">
                {id}-{name}
                </h2>
                <p>{city}</p>

                <img src={Delete} alt="delete image" className="h-5 absolute right-5 bottom-10"
                onClick={() => deleteStudent(id)}/>

                <Link to={`/Edit/${id}`}>
                <img src={Edit} alt="Edit Image" className="h-5 absolute right-5 bottom-4"/>
                </Link>

                
    </div>
  )
}

export default StudentCard