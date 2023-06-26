import React, {useState} from 'react';
import {NewTodo} from './components/NewTodo';
import {Todo} from './todo.model';
import {TodoList} from "./components/TodoList";

const App:React.FC = ()=> {
  
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text:string)=> {
    console.log('text:', text);
    setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text:text }]);
  };

  const deleteTodoHandler = (id:string)=>{
    // delete
    setTodos((prevTodos)=>prevTodos.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
      <NewTodo onAdd={todoAddHandler}/>
      <TodoList items={todos} onDelete={deleteTodoHandler}/>
    </div>
  );
}

export default App;