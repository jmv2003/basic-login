import React, { useState } from 'react';
import './App.css';
const App: React.FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ left: '0px', top: '0px' });
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name && password) {
      setIsLoggedIn(true);
    }
  };
  const handleButtonHover = () => {
    // Generate random positions within the viewport size
    let randomX = Math.floor(Math.random() * window.innerWidth - 100); // button width considered
    let randomY = Math.floor(Math.random() * window.innerHeight - 50); // button height considered
    randomX = (randomX < 0 || randomX > window.innerWidth) ?  window.innerWidth / 2 : randomX;
    randomY = (randomY < 0 || randomY > window.innerHeight) ?  window.innerHeight / 2 : randomY;
    setButtonPosition({ left: `${randomX}px`, top: `${randomY}px` });
  };
  return (
    <div className="App" style={{ position: 'relative' }}>
      {isLoggedIn ? (
        <h1>Welcome, {name}! You have successfully logged in.</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            style={{
              position: 'absolute',
              left: buttonPosition.left,
              top: buttonPosition.top,
            }}
            onMouseEnter={handleButtonHover}
          >
            Enter
          </button>
        </form>
      )}
    </div>
  );
};
export default App;