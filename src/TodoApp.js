import React, { useState } from 'react'

 const TodoApp=() =>{
    
    const [todos,setTodos]=useState([{id:1,name:"Aswin"},{id:2,name:"k"}]);
    const [ash,setAsh]=useState("");

     const changeHandler=(e)=>{
        setAsh(e.target.value);
     

     }
     const addHandler=()=>{
        setTodos([...todos,{id:todos.length+1,name:ash}]);
        setAsh("");
     }

  return ( 
    <>
<input name='aswin' onChange={changeHandler} value={ash}/>
<button onClick={addHandler}>add</button> 
<br/>     
<ul>
    {todos.map((todo)=>{
        return<li key={todo.id}>{todo.name}</li>
    })}  
</ul>
    </>
  )
}
export default TodoApp;