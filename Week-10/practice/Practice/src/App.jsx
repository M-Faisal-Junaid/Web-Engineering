import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [friendType, setFriendType] = useState('good');
  const [goodFriends, setGoodFriends] = useState([]);
  const [badFriends, setBadFriends] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleFriendTypeChange = (e) => {
    setFriendType(e.target.value);
  };

  const handleAddFriend = () => {
    if (name.trim() === '') {
      alert('Please enter a name.');
      return;
    }
    if (friendType === 'good') {
      setGoodFriends([...goodFriends, name]);
    } else {
      setBadFriends([...badFriends, name]);
    }
    setName('');
  };

  return (
    <>
      <h3>Count is {count}</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>+</button>
        <button onClick={() => setCount((count) => count - 1)}>-</button>
      </div>

      <hr />

      <div>
        <h2>Add Friends</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="friendType">Friend Type:</label>
          <select id="friendType" value={friendType} onChange={handleFriendTypeChange}>
            <option value="good">Good</option>
            <option value="bad">Bad</option>
          </select>
        </div>
        <button onClick={handleAddFriend}>Add</button>
        <div>
          <h3>Good Friends</h3>
          <ul>
            {goodFriends.map((friend, index) => (
              <li key={index}>{friend}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Bad Friends</h3>
          <ul>
            {badFriends.map((friend, index) => (
              <li key={index}>{friend}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;