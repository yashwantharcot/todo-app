import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'todo-app\src\store\actions\authActions.ts';

function Login() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username) {
      dispatch(login(username));
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Enter your username" 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
