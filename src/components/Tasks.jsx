import React from 'react'
import './Tasks.css'
import { Cheak,Trash2,Pencil, CornerUpLeft } from 'lucide-react'
import { useEffect,useState } from 'react'


export const Tasks = () => {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])
    const [todoIndex, setTodoIndex] = useState(-1)
    const [selectedIndex, setSelectedTask] = useState(null);

    useEffect(() => {
        const todosInStorage = JSON.parse(localStorage.getItem('todos'))
        if (todosInStorage){
            setTodos(todosInStorage);

            
        }
    }, [todo])

    const handleAddTodo = () => {
       if(!todo) return;
        if(todoIndex >- 1)
        {
           todos[todoIndex] = todo; 
                todos[index] = todo;
                setTodoIndex(-1) 
        }
        else {
            const allTodos = [...todos, todo]
            localStorage.setItem('todos',   JSON.stringify(newTodo))
            //setTodos([...todos,todo])
        
        }
        setTodo('')
    }

    const handleDeleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.slice(index, 1);
        setTodos(newTodos)
        //localStorage.setItem('todos', JSON.stringify(newTodos))
    }
    // console.log(todos)

    const handleUpdateTodo = (index) => {
        setTodo(todos[index])
        setTodoIndex(index)
    }

  return (
    <div className='task-wrapper'>
        <div>
            <input 
                onChange={({setTodo})=>setTodo(target.value)}
                value={todo}
                className='task-input'
                placeholder='Add a new task'
            />
            <Cheak
                onClick={handleAddTodo}
                style={{ cursor: todo ? 'pointer' : 'not-allowed' }}
                className='task-icon'
            />
        </div>
        <div className='todos-wrapper'>
            {todos.map((todo, index) => (
                <div class="todo-item" key={index}>
                    <span
                        className='todo-link'
                    >
                    {index + 1},{todo}
                    </span>
                    <div>
                        <Trash2 className="trash-icon"
                                onClick={() => handleDeleteTodo(index)}
                        />
                        <Pencil className="pencil-icon"
                                onClick={()=> handleUpdateTodo(index)}
                        />
                    </div>
                </div>
            ))}
            
        </div>
        {/* {selectedTask !== null && (
        <div className='back-icon' onClick={() => setSelectedTask(null)}>
          <CornerUpLeft /> */}
    </div>
  )
}
// </div>
//   );};