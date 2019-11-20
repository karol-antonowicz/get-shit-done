import React from 'react';
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'
import './App.css';

function App() {
  return (
    <div className="App">
      <ToDoInput />
      <ToDoList />
    </div>
  );
}

export default App;
