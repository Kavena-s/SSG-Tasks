import { useState } from "react";

 function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [rem, setrem] = useState("");

  function Add() {
    if (task.trim() !== "") {
      setTodos((prevTodos) => [...prevTodos, task]); 
      setTask(""); 
    }
  }
  function Remove() {
    if (rem.trim() !== "") {
      setTodos((prevTodos) => {
        if (Array.isArray(prevTodos)) {
          return prevTodos.filter((todo) => todo !== rem); 
        }
        return []; 
      });
      setrem(""); 
    }
  }

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={Add}>Add</button><br/><br/>
      <input
        type="text"
        value={rem}
        onChange={(e) => setrem(e.target.value)}
        placeholder="Enter a task to remove"
      />
      <button onClick={Remove}>Remove</button>
      <ul>
        {Array.isArray(todos) && todos.map((todo, index) => (
          <li key={index}>{todo}</li>
          
        ))}
        
      </ul>
    </div>
  );
}
export default TodoList;