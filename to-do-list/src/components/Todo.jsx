import React from 'react'
const Todo = ({todo}) =>{
    return(<div className="todo">
        <div className="content">
          <p>{todo.text}</p>
          <div className="category">({todo.category})</div>
        </div>
        <div>
          <button className="complete">Completar</button>
          <button className="remove">x</button>
        </div>        
      </div>)
}

export default Todo