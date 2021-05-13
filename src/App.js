
import React from 'react';
import logo from './logo.svg';
import './style.css';
import Todo from './Todo';
import { TodoForm } from './TodoForm'

export default function App() {
  const [todos, setTodos] = React.useState([
    { 
      text: 'Learn about React',
    isCompleted: false
     },
    { 
      text: 'Introduction to react',
      isCompleted: false
       },
    { 
      text: 'React Components',
      isCompleted: false
       },
       { 
      text: 'Learn about React',
    isCompleted: false
     },
    { 
      text: 'React Props and States',
      isCompleted: false
       }
  ]);
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(resp => resp.json())
      .then(data => {
        console.log('data', data);
        setTimeout(() => {
          setTodos([...todos, ...data]);
        }, 3000);
      });
  }, []);
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="app">
    <h2>Todo-List</h2>
    <TodoForm addTodo={addTodo} />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
             completeTodo={completeTodo}
             removeTodo={removeTodo}
          />
        ))}
        {todos.length === 0 ? <div>Add some todos!</div> : null}
         </div>
    </div>
  );
}
export default App;