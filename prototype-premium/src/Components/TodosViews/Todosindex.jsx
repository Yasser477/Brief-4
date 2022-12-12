
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Index = () => {
  const[Todos,setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axios.get(`http://127.0.0.1:8001/api/todos/`);
      console.log(response.data);
      setTodos(response.data);
      // ...
    }
    fetchData();
  },[]);
  const setData = (Todo) => {
    console.log(Todo);
    const { id, name} = Todo;
        localStorage.setItem('ID', id);
        localStorage.setItem('name', name);
}
const deleteTodo = (id) => {
  console.log("inside delete");
    axios.delete(`http://127.0.0.1:8001/api/todos/${id}`)
  }
 
  return (
    <div className='mt-12'>
      <div className='flex justify-center m-2 p-2'>
        <Link to="/Todos/create" className = "px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md"> New Todos</Link>
        
      </div>
      
<div class="overflow-x-auto relative">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    Todos id
                </th>
                <th scope="col" className="py-3 px-6">
                    Todos Name
                </th>
                <th scope="col" className="py-3 px-6">
                    Action
                </th>
                
                
                
            </tr>
        </thead>
        <tbody>
           {Todos.map(Todo =>(
             <tr key={Todo.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"> 
             <td className="py-4 px-6">{Todo.id}</td>
             <td className="py-4 px-6">{Todo.name}</td>
             <td className="py-4 px-6">
              <a href={`/Todos/${Todo.id}/edit`}><button   onClick={() => {setData(Todo)}}  className = "px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">Edit</button></a>
              <button  onClick={() => deleteTodo(Todo.id)}  className = "px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded-md">Delete</button>

              

             </td>

            </tr>
         
           ))}
        </tbody>
    </table>
</div>

    </div>
  )
}

export default Index