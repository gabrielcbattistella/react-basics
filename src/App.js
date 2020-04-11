import React, {useState} from 'react';
import Tweet from './Tweet';

function App(){

  const [users, setUsers] = useState([
    {name: 'Gabriel', message: 'Hello there'},
    {name: 'João', message: 'Just another quote'},
    {name: 'Test', message: 'Lorem ipsum'}
  ]);

  return(
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  )
}

export default App;