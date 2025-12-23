import { useState } from "react";
import { TodoList} from "./newToDoform";
import {NewTodoForm} from "./toDoList";
import "./style.css";


// Export this type so TodoList.tsx can use it
export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export default function App() {
  const [toDos, setToDos] = useState<Todo[]>([]);

  // Logic to ADD (passed to NewTodoForm)
  function addTodo(title: string) {
    setToDos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  // Logic to TOGGLE (passed to TodoList)
  function toggleTodo(id: string, completed: boolean) {
    setToDos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  // Logic to DELETE (passed to TodoList)
  function deleteTodo(id: string) {
    setToDos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      {/* Pass the function to add items down as a prop */}
      <NewTodoForm onSubmit={addTodo} />
      
      <h1 className="header">ToDo List</h1>

      {/* Pass the data and the action functions down as props */}
      <TodoList 
        todos={toDos} 
        toggleTodo={toggleTodo} 
        deleteTodo={deleteTodo} 
      />
    </>
  );
}

//* 
// 1. Import
// 2. Delcare fuucntion and set state to 0 
// 3. App will return what is in ()
// 4. label type of react comptoeneont that is used for lalbling thigns
// 5. Inptut is a type of input filed, text = refers to what data type is bieng intputed , id refers to compotent type that can be refrenced laater
//

 //
/**
 * On chhange when there is a change in the input, rederder the compoeneont input and set the value to the target value which would be the input value in teh field\
 * //
 */


/**
 * Error Log
 * 1. Input Elements cannot ahve children accidnealty placed it in causeing compilder error
 *  // Compiler Error : If you render a blanks creen it means that at run time somehintg his not climpilign
 * Error shows in dev console "Uncahghnt Error Void" 
 *  
 */

/*

Importnat notes 
ID : Don't use index
1. Use filter to delete list array value s
2. {} is used to delcare js variables in jsx and tsx
3. Use a function instead of modifying state directly when you want to update state useing the last value 
4.React.FormEvent is mainly used for expected event ytpe  

*/