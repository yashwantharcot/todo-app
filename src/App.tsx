import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/tasks" element={isAuthenticated ? (
          <>
            <TaskInput />
            <TaskList />
          </>
        ) : <Navigate replace to="/login" />} />
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;

