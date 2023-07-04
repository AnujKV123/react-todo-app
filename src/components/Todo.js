import React from 'react'

export const Todo = ({todo, onDelete}) => {
  return (
    <>
    <div>
        <h5>{todo.title}</h5>
        <p>{todo.desc}</p>
        <buttob className="btn btn-danger" onClick = {() => {onDelete(todo)}}>Delete</buttob>
    </div>
     <hr/>
     </>
  )
}
