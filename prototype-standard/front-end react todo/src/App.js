import {Routes,Route,Link} from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import Todosindex from './Components/TodosViews/Todosindex';
import TodosEdit from './Components/TodosViews/TodosEdit';
import AddTodos from './Components/TodosViews/addTodos';
function App() {
  return (
    <div className="bg-slate-400">
      <div className="max-w-6xl mx-auto min-h-screen">
        <nav >
          <ul className='flex'>
            <li className='m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
              <Link to='/'>Home</Link>   
            </li>
            <li className='m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
              <Link to='/Todos'>Todos</Link>   
            </li>
            <li className='m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
              <Link to='/Todos/create'>addTodos</Link>   
            </li>

          </ul>

        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Todos' element={<Todosindex />} />
          <Route path='/Todos/create' element={<AddTodos />} />
          <Route path='/Todos/:id/edit' element={<TodosEdit />} />


          </Routes>

      </div>
    hello there
    </div>
  );
}

export default App;
