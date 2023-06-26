import React, {useRef} from 'react';

interface NewTodoProps{
  onAdd: (text:string) => void;
}

export const NewTodo:React.FC<NewTodoProps> = ({onAdd}) => {

  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event:React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;

    onAdd(enteredText);
  };

  return (
  <form onSubmit ={todoSubmitHandler}>
    <div>
      <label htmlFor="todo-text">Todo text</label>
      <input type="text" id="todo-text" ref={textInputRef}/>  
    </div> 
    <button type="submit">Add TODO</button> 
  </form>  
)}