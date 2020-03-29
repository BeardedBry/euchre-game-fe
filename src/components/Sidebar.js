import React from 'react';

const Sidebar = ({users}) => {

    return (
        <div id="Users">
          <ul>
          {users.map((user)=>{
            return (<li>{user.name}</li>);
          })}
          </ul>
        </div>
    );
}

export default Sidebar;