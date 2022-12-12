import {useState,useEffect} from 'react'
import axios from 'axios'

const AddTodos = () => {
  const[formValue,setFormValue] = useState({ 
    name:""
  })
  const captureValue = (evt) =>{
    
     console.log(evt.target)
    const name = evt.target.name;//data : "nkdkdk", inputhtmlname: name"
    const value = evt.target.value;
    setFormValue({...formValue, [name]:value})
  }

  const AddTodos = async(e) => {
    e.preventDefault();
     await axios.post('http://127.0.0.1:8001/api/todos', formValue)
     setFormValue({
      name:""
     })
     console.log("inserted succesfully")
    };
    

  
  return (
    <div className='mt-12'>
      <form className='max-w-md mx-auto p-4 bg-white shadow-md rounded-sm'>
        <div className='space-y-6'>
          <div className='mb-4'>
            <label htmlFor='name' className='block mb-2 text-sm font-medium'>Name</label>
            <input name="name" value={formValue.name} onChange={captureValue} className="border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2"></input>
          </div>
        </div>
        <div className = 'flex justify-center mb-4'>
          <button onClick={AddTodos} className="  px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">Add Todos</button>
        </div>


      </form>
    </div>
  )
}

export default AddTodos