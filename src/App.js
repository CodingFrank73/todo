
import './App.css';

import { useState } from 'react';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';



function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <NewTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
