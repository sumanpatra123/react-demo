
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
      text: 'React Props and States',
      isCompleted: false
       }
  ]);
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
             completeTodo={completeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
export default App;