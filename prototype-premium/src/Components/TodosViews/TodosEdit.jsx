import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';
const TodosEdit = () => {
  const[name,setName] =useState("")
  const[id,setID] = useState(null)
  
  useEffect(() => {
    setID(localStorage.getItem('ID'))
    setName(localStorage.getItem('name'));
    console.log(localStorage.getItem('name'));
   
}, []);
const updateAPIData = (e) => {
  e.preventDefault();


  axios.put(`http://127.0.0.1:8001/api/todos/${id}`, {name})
}

  return (
    <div className='mt-12'>
      <form className='max-w-md mx-auto p-4 bg-white shadow-md rounded-sm'>
        <div className='space-y-6'>
          <div className='mb-4'>
            <label htmlFor='name' className='block mb-2 text-sm font-medium'>Name</label>
            <input key={id} name="name" value={name} onChange={(e) => setName(e.target.value)} className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"></input>
          </div>
        </div>
        <div className = 'flex justify-center mb-4'>
          <button  onClick={updateAPIData} className="  px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">Update Todos</button>
        </div>


      </form>
    </div>
  )
}

export default TodosEdit
