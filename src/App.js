import React from 'react';
import './App.css';

function App() {

  const users = [
    {name: 'user1'},
    {name: 'user2'},
    {name: 'user3'},
    {name: 'user4'},
    {name: 'user5'},
  ];


  return (
    <div id="ChatScreen">
      <h1>Euchre</h1>
      <div id="Users">
        <ul>
        {users.map((user)=>{
          return (<li>{user.name}</li>);
        })}
        </ul>
      </div>
      <div id="Chat">
        <div id="Chat-Message-Feed">
          <p>Some message.</p>          
        </div>
        <div id="Chat-Message-Input">
          <form>
            <input></input>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
