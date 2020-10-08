import React, { Component } from 'react';
import './App.css';
import Course from "./Course";
import Post from "./Post";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Course />
        <Post />
      </div>
    </div>
  );
}
export default App;
