import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [task,setAddTask]=useState([])
  const [input,setInput]=useState('')

  const AddTaskFunc =() =>{
    const temp =[...task,{text:input,isCompleted:false}]
    setAddTask(temp)
  }
  const toggleTask =(index)=>{
     const temp=task.map((item,i)=>i===index?{...item, isCompleted:!item.isCompleted}:item)
     setAddTask(temp)
  }
  const Deletetask =(index)=>{
    const temp=task.filter((item,i)=>i!==index)
    setAddTask(temp)
  }
  return (
    <div >
      <h1>To do App</h1>
      <hr/>
      <input type='text' onChange={(e)=>setInput(e.target.value)} style={{width:250,height:40}}></input>
      <button onClick={()=>AddTaskFunc()}>Add</button>
      <hr/>
      <div>
        {
          task.map((item,index)=>(
            <div>
            <input type='checkbox' checked={item.isCompleted} onClick={()=>toggleTask(index)}></input>
            <label>{item.text}</label>
            <button onClick={()=>Deletetask(index)}>Delete Task</button>
            </div>
          ))
        }
      </div>
      <hr/>
      <div>
        <h2>Completed Items</h2>
        {
          task.map((item)=>(
            item.isCompleted&&<label>{item.text}</label>
          ))
        }
      </div>
    </div>
  );
}

export default App;
