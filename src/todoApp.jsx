import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function todoApp(){
    let [todo, setTodo] = useState([{task:"starting list", id: uuidv4() }]);
    let [newTodo, setNewTodo]= useState("");

    let addNewTask = () =>{
        setTodo([...todo, { task:newTodo, id: uuidv4()}]);
        setNewTodo("");
    }
    
    let updateTodoValue = (event)=>{
        setNewTodo(event.target.value);
    }

    return(
      <>
     <input placeholder='Add a task list' 
     value={newTodo}
     onChange={updateTodoValue}></input>
      <button onClick={addNewTask}>Create Task</button>
      <br /><br />
      <br /><br />
      <br /><br />
      <h4>List Item</h4>
      <ul>
        {
            todo.map((todoList)=>(
                   <li key={todoList.id}>{todoList.task}</li> 
            ))
        }
      </ul>
      </>
    );
}