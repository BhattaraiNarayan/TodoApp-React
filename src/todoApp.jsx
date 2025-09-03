import { useState } from "react";

export default function todoApp(){
    let [todo, setTodo] =useState(["sample task"]);
    
    return(
        <>
     <input placeholder='Add a task list'></input>
      <button>Create Task</button>
      <br /><br />
      <br /><br />
      <br /><br />
      <h4>List Item</h4>
      <ul>
        {
            todo.map((todoList)=>(
                   <li>{todoList}</li> 
            ))
        }
      </ul>
      </>
    );
}