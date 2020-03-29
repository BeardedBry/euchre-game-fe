import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MessagePane from './components/MessagePane';
import MessageInput from './components/MessageInput';

function App() {

  const users = [
    {
      name: 'Brian',
    },
    {name: 'user2'},
    {name: 'user3'},
    {name: 'user4'},
    {name: 'user5'},
  ];


  return (
    <div id="Main">
      <div id="Sidebar" className="col">
        <Sidebar users={users}/>
      </div>
      <div id="Chat" className="col">
        <MessagePane/>
        <MessageInput/>
      </div>
      <div id="Games" className="col">
        Game list
      </div>
    </div>
  );
}

export default App;
