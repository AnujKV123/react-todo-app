import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import { AddTodo } from './components/AddTodo';
import { Todos } from './components/Todos';
import React, { useState} from 'react';

function App() {
  let initTodo=[];

  const onDelete = (todo)=>{
    console.log("I am onDelete of todo: ", todo)
    setTodos(todos.filter((e)=>{
      return e !== todo;
    }));
  }

  const addTodo = (title, desc)=>{
      console.log("I am Adding", title, desc)
      let sno;
      if(todos.length===0){
        sno=0;
      }
      else{
      sno = todos[todos.length - 1].sno + 1;
      }
      const myTodo = {
        sno:sno,
        title:title,
        desc:desc
      }
      setTodos([...todos, myTodo]);
    }
    const [todos, setTodos] = useState(initTodo);
  
  return (
    <>
    <Nav/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos = {todos} onDelete = {onDelete}/>
    </>
  );
}

export default App;
