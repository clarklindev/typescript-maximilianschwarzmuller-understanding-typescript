import React from 'react';

interface TodoListProps {
  items: {id: string, text:string}[],
  onDelete: (id:string) => void
}

export const TodoList: React.FC<TodoListProps> = (props)=>{
  return <ul>
    {
      props.items.map((todo)=> 
      <li key={todo.id}>
        <span>
          {todo.text}
        </span>
        <button onClick={props.onDelete.bind(null, todo.id)}>Delete</button>
      </li>)
    }
  </ul>
}