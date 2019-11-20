import React from 'react';
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <div className='author'><p>Made by <span><a href='https://www.linkedin.com/in/karol-antonowicz/'>Karol Antonowicz</a></span></p></div>
        <div>
        <div className="Shit">
          <h1>Get shit done!</h1>
          <h2>Yes, you can.</h2>
        </div>
        <ToDoInput />
        </div>
      </div>
      <div className="Main">

        <ToDoList />
      </div>
    </div>
  );
}

export default App;
