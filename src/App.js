import React from 'react';
import './App.css';
// import Login from './pages/Login'
// import Register from './pages/Register'
// import Home from './pages/Home'
import Todo from './pages/Todo'
// import {
//   HashRouter,
//   NavLink,
//   Route,
//   Routes
// } from 'react-router-dom';

function App() {
  return (
    <div id="todoListPage" className="bg-half">
      <nav>
        <h1>
        </h1>
      </nav>
      <div className="conatiner todoListPage vhContainer">
        <Todo />
      </div>
    </div>
  )
}

export default App;
