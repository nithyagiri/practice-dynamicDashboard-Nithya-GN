import React from 'react';
import './App.css';
import Greeting from './components/Greeting.jsx';
import ConditionalMessage from './components/ConditionalMessage.jsx';
import TaskList from './components/TaskList.jsx';
function App() {
const currentTime = new Date().toLocaleDateString()  
const userName="Dolly";
let booleanValue = true;
  return (
    <>
      <div>
      <Greeting name={userName} />
      <ConditionalMessage isPremium ={booleanValue} />
      <TaskList />
      </div>
    </>
  )
}

export default App
