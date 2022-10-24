
import './App.css';

import { useState } from 'react';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';



function App() {
  const [todos, setTodos] = useState([]);

  console.log("todos", todos);

  return (
    <div className="App">
      <NewTodoForm setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
